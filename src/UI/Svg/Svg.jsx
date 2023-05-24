import PropTypes from 'prop-types';

export const Svg = ({src, width, height, className}) => (
	<svg
		className={className}
		width={width}
		height={height}
		xmlns="http://www.w3.org/2000/svg"
	>
		<use xlinkHref={src} />
	</svg>
);

Svg.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
};

