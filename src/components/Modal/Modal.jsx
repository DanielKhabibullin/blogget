import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {Text} from '../../UI/Text/Text';
import {FormComment} from './FormComment/FormComment';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';

export const Modal = ({id, closeModal}) => {
	const overlayRef = useRef(null);
	const [commentsData] = useCommentsData(id);
	const [post, comments] = commentsData;
	console.log(post);
	console.log(comments);
	const handleClick = e => {
		const target = e.target;
		if (target === overlayRef.current) {
			closeModal();
		}
	};

	const handleKeyDown = e => {
		if (e.key === 'Escape') {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className={style.overlay} ref={overlayRef}>
			<div className={style.modal}>
				{
					post ?
					<>
						<Text As='h2' className={style.title}
							size={18}
							tsize={24}
						>
							{post.title}
						</Text>

						<div className={style.content}>
							<Markdown options={{overrides: {
								a: {
									props: {
										target: '_blank',
									},
								},
							}}}>
								{post.selftext}
							</Markdown>
						</div>
						<Text As='p' className={style.author}
							color='orange'
						>{post.author}</Text>
						<FormComment />
						<Comments comments={comments} />
						<button className={style.close} onClick={closeModal}>
							<CloseIcon />
						</button>
					</> :
				<Text As='p' className={style.title} >Loading...</Text>
				}
			</div>
		</div>,
		document.getElementById('modal-root')
	);
};

Modal.propTypes = {
	id: PropTypes.string,
	closeModal: PropTypes.func,
};
