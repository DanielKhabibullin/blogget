import style from './Search.module.css';
import searchIcon from './img/search.svg';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {searchRequest} from '../../../store/search/searchAction.js';

export const Search = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const handlerSubmit = e => {
		e.preventDefault();
		dispatch(searchRequest(search));
	};

	return (
		<form className={style.form} onSubmit={handlerSubmit}>
			<input
				className={style.search}
				type='search'
				placeholder='Search'
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			<button className={style.button} type='submit'>
				<img className={style.svg} src={searchIcon} alt="Search" />
			</button>
		</form>
	);
};
