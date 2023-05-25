import PropTypes from 'prop-types';
import React from 'react';

const Svg = ({src, width, height, className}) => (
	<svg
		className={className}
		width={width}
		height={height}
		viewBox={`0 0 ${width} ${height}`}
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<use xlinkHref={src} />
	</svg>
);

Svg.propTypes = {
	src: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	alt: PropTypes.string,
};

export default Svg;
