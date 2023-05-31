import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';
import {deleteToken} from '../../../store/token/tokenAction';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Text} from '../../../UI/Text/Text';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = () => {
	const [showLogout, setShowLogout] = useState(false);
	const [auth, loading, clearAuth] = useAuth();
	const dispatch = useDispatch();
	const getOut = () => {
		setShowLogout(!showLogout);
	};
	// TODO
	const logOut = () => {
		dispatch(deleteToken());
		clearAuth();
	};

	return (
		<div className={style.container}>
			{loading ? (
				<Preloader size={50} />
			) : auth.name ? (
				<>
					<button className={style.btn} onClick={getOut}>
						<img
							className={style.img}
							src={auth.img}
							title={auth.name}
							alt={`Avatar ${auth.name}`}
						/>
						<Text>{auth.name}</Text>
					</button>
					{showLogout ? <button
						className={style.logout}
						onClick={logOut}>
						Logout
					</button> : ''}
				</>
				) : (
					<Text className={style.authLink} As='a' href={urlAuth}>
						<LoginIcon className={style.svg}/>
					</Text>
				)}
		</div>
	);
};
