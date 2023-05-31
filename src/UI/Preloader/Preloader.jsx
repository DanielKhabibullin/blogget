import CircleLoader from 'react-spinners/CircleLoader';
import PropTypes from 'prop-types';
import style from './Preloader.module.css';

export const Preloader = ({size}) => (
	<div className={style.loader}>
		<div className={style.wrapper}>
			<CircleLoader color='#cc6633' css={{display: 'block'}} size={size}/>
		</div>
	</div>
);
Preloader.propTypes = {
	size: PropTypes.number,
};
