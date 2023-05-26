import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const.js';
import {tokenContext} from '../context/tokenContext.jsx';

export const useAuth = () => {
	const [auth, setAuth] = useState({});
	const {token, removeToken} = useContext(tokenContext);

	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/api/v1/me`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.status === 401) {
					setAuth({});
					throw new Error(response.status);
				}
				return response.json();
			})
			.then(({name, icon_img: iconImg}) => {
				const img = iconImg.replace(/\?.*$/, '');
				setAuth({name, img});
			})
			.catch((err) => {
				console.error(err);
				setAuth({});
				removeToken();
			});
	}, [token]);

	const clearAuth = () => setAuth({});

	return [auth, clearAuth];
};
