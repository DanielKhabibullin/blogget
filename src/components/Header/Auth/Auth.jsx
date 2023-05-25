import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {urlAuth} from '../../../api/auth';
import {URL_API} from '../../../api/const';
import {Text} from '../../../UI/Text/Text';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({token}) => {
	const [auth, setAuth] = useState({});
	// const [isLogoutMode, setIsLogoutMode] = useState(false);
	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/api/v1/me`, {
			headers: {
				Authorization: `bearer ${token}`
			},
		})
			.then((response) => response.json())
			.then(({name, icon_img: iconImg}) => {
				const img = iconImg.replace(/\?.*$/, '');
				setAuth({name, img});
			})
			.catch(err => {
				console.error(err);
				setAuth({});
			});
	}, [token]);

	// const handleLogoutClick = () => {
	// setIsLogoutMode(true);
	// };

	// const handleCancelButtonClick = () => {
	// setIsLogoutMode(false);
	// };
	return (
		<div className={style.container}>
			{auth.name ? (
			<button>
				<img className={style.img}
					src={auth.img} title={auth.name} alt={`Avatar ${auth.name}`} />
			</button>
				) : (
					<Text className={style.authLink} As='a' href={urlAuth}>
						<LoginIcon className={style.svg}/>
					</Text>
				)}
		</div>
	);
};

Auth.propTypes = {
	token: PropTypes.string,
};
