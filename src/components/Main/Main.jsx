import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Modal from '../Modal';
import {StartPage} from './StartPage/StartPage';
import {NotFound} from './NotFound/NotFound';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

export const Main = () => {
	const navigate = useNavigate();
	const posts = useSelector((state) => state.posts.posts);

	useEffect(() => {
		if (!posts) {
			console.log('error');
			navigate('error');
		}
	}, [posts]);

	return (
		<main className={style.main}>
			<Layout>
				<Tabs />
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/category/:page' element={<List />}>
						<Route path='post/:id' element={<Modal/>} />
					</Route>
					<Route path='auth' element={<Navigate to='/' />} />
					<Route path='*' element={<Navigate to='error' />} />
					<Route path='error' element={<NotFound />} />
				</Routes>
			</Layout>
		</main>
	);
};
