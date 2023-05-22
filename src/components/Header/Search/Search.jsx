import React from 'react';
import style from './Search.module.css';
import search from './img/search.svg';

export const Search = () => (
	<form className={style.form}>
		<input className={style.search} type='search' placeholder='Search' />
		<button className={style.button}>
			<img className={style.svg} src={search} alt="Search" />
		</button>
	</form>
);
