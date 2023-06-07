import style from './Logo.module.css';
import logo from './img/logo.svg';
import {Link} from 'react-router-dom';

export const Logo = () => (
	<Link to={'/'} className={style.link} href='/'>
		<img className={style.logo} src={logo} alt="Logo Blogget" />
	</Link>
);
