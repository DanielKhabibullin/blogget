import {useContext, useRef} from 'react';
import {authContext} from '../../../context/authContext.jsx';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './FormComment.module.css';

export const FormComment = () => {
	const {auth} = useContext(authContext);
	const textareaRef = useRef(null);
	const handleSubmit = e => {
		e.preventDefault();
		console.log(textareaRef.current.value);
		textareaRef.current.value = '';
	};
	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<Text As='h3' size={14} tsize={18}>{auth.name}</Text>
			<textarea className={style.textarea} ref={textareaRef}></textarea>
			<button className={style.btn}>Comment</button>
		</form>
	);
};

