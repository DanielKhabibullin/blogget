import PropTypes from 'prop-types';
import React from 'react';
// imports

const SVGCollection = {
	// Logo,
	// Auth,
	// Search,
	// Top,
	// Home,
	// Hot,
	// Best,
	// Arrow,
	// Delete,
	// Up,
	// Down,
};

const Svg = ({itemName, width, height, className}) => {
	const Item = SVGCollection[itemName];
	return <Item className={className} width={width} height={height} />;
};

Svg.propTypes = {
	itemName: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
};

export default Svg;
