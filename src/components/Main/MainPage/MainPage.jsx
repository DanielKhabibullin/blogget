import {Text} from '../../../UI/Text/Text';
import style from './MainPage.module.css';

export const MainPage = () => {
	console.log(style);
	return (
		<div className={style.wrapper}>
			<Text As='h2' size={26} className={style.title}>Main page</Text>
			<Text As='p' size={22} className={style.subtitle}>Welcome!</Text>
			<Text As='p' size={18} className={style.text}>Choose category</Text>
		</div>
	);
};

