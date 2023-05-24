import React from 'react';
import PropTypes from 'prop-types';
import style from './Heading.module.css';
import {Text} from '../../../UI/Text/Text.jsx';

export const Heading = ({text}) =>
	<Text As='h1'
		className={style.heading}
		size={22}
		tsize={26}
		center
	>
		{text}
	</Text>;

Heading.propTypes = {
	text: PropTypes.string,
};
