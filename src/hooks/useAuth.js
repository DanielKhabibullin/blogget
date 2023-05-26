import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
	const [auth, setAuth] = useState({});
	const {token, removeToken} = useContext(tokenContext);

	const clearAuth = () => {
		setAuth({});
		removeToken();
	};

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
				clearAuth();
			});
	}, [token]);


	return [auth, clearAuth];
};
