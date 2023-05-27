import {Text} from '../../../../../UI/Text/Text';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const Content = ({title, author, markdown}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className={style.content}>
			<Text As='h2' className={style.title}>
				<Text
					As='a'
					className={style.linkPost}
					href="#"
					size={14}
					tsize={24}
					bold
					onClick={() => setIsModalOpen(true)}
				>
					{title}
				</Text>
			</Text>
			<Text
				As='a'
				size={12}
				tsize={14}
				color='orange'
				className={style.linkAuthor}
				href={`#${author}`}
				medium
			>
				{author}
			</Text>
			{isModalOpen && <Modal markdown={markdown}
				title={title}
				author={author}
				closeModal={() => setIsModalOpen(false)}
			/>}
		</div>
	);
};

Content.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	markdown: PropTypes.string,
};
