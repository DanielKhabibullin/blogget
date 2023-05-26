import {useContext, useState} from 'react';
import {urlAuth} from '../../../api/auth';
import {authContext} from '../../../context/authContext';
import {Text} from '../../../UI/Text/Text';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = () => {
	const [showLogout, setShowLogout] = useState(false);
	const {auth, clearAuth} = useContext(authContext);

	const getOut = () => {
		setShowLogout(!showLogout);
	};

	return (
		<div className={style.container}>
			{auth.name ? (
				<>
					<button onClick={getOut}>
						<img className={style.img}
							src={auth.img} title={auth.name} alt={`Avatar ${auth.name}`} />
					</button>
					{showLogout ? <button
						className={style.logout}
						onClick={() => {
							clearAuth();
						}}>Logout</button> : ''}
				</>
				) : (
					<Text className={style.authLink} As='a' href={urlAuth}>
						<LoginIcon className={style.svg}/>
					</Text>
				)}
		</div>
	);
};
