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
import {Preloader} from '../../UI/Preloader/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
	const {id, page} = useParams();
	const navigate = useNavigate();
	const overlayRef = useRef(null);
	const [commentsData, post, status] = useCommentsData(id);
	const handleClick = e => {
		const target = e.target;
		if (target === overlayRef.current || e.key === 'Escape') {
			navigate(`/category/${page}`);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className={style.overlay} ref={overlayRef}>
			<div className={style.modal}>
				{status === 'loading' && <Preloader size={200}/>}
				{status === 'error' && (
					<Text As='h2' className={style.title}>
						Error
					</Text>
				)}
				{status === 'loaded' && (
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
						<Comments comments={commentsData} />
						<button className={style.close}
							onClick={() => navigate(`/category/${page}`)}
						>
							<CloseIcon />
						</button>
					</>
				)}
			</div>
		</div>,
		document.getElementById('modal-root')
	);
};

Modal.propTypes = {
	id: PropTypes.string,
	closeModal: PropTypes.func,
};
