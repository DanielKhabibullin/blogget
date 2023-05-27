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

export const Modal = ({id, title, author, markdown, closeModal}) => {
	const overlayRef = useRef(null);
	const [commentsData] = useCommentsData(id);
	console.log(commentsData);
	const [post, comments] = commentsData;
	console.log(post);
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
							{title}
						</Text>

						<div className={style.content}>
							<Markdown options={{overrides: {
								a: {
									props: {
										target: '_blank',
									},
								},
							}}}>
								{markdown}
							</Markdown>
						</div>
						<Text As='p' className={style.author}
							color='orange'
						>{author}</Text>
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
	title: PropTypes.string,
	author: PropTypes.string,
	markdown: PropTypes.string,
	closeModal: PropTypes.func,
};
