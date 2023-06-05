import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';
import {Text} from '../../../UI/Text/Text';
import style from './FormComment.module.css';

export const FormComment = () => {
	const value = useSelector(state => state.comment.comment);
	const auth = useSelector(state => state.auth.data);
	const dispatch = useDispatch();
	const textareaRef = useRef(null);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		if (showForm) {
			textareaRef.current.focus();
		}
	}, [showForm]);

	const showFormHandler = () => {
		setShowForm(!showForm);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(textareaRef.current.value);
		textareaRef.current.value = '';
	};

	const handleChange = e => {
		dispatch(updateComment(e.target.value));
	};

	return (
		<div>
			<button className={style.btn}
				onClick={showFormHandler}>Write a comment</button>
			{showForm && (
				<form className={style.form} onSubmit={handleSubmit}>
					<Text As='h3' size={14} tsize={18}>{auth.name}</Text>
					<textarea className={style.textarea} ref={textareaRef}
						value={value}
						onChange={handleChange}
					></textarea>
					<button className={style.btn}>Comment</button>
				</form>
			)}
		</div>
	);
};

