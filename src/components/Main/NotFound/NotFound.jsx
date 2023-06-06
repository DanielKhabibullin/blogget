import {Text} from '../../../UI/Text/Text.jsx';
import style from './NotFound.module.css';

export const NotFound = () => (
	<div className={style.wrapper}>
		<Text As='h2'
			className={style.title}
			size={26}
			bold
			center
		>Error! Page not found</Text>
	</div>
);

