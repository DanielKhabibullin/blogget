import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './NotFound.module.css';

export const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => navigate('/'), 5000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className={style.wrapper}>
			<Text As='h2'
				className={style.title}
				size={26}
				bold
				center
			>404! Page not found</Text>
		</div>
	);
};
