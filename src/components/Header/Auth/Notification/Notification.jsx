import style from './Notification.module.css';
import ReactDOM from 'react-dom';

export const Notification = () =>
	ReactDOM.createPortal(
		<div className={style.wrapper}>
			<div className={style.icon}></div>
			<div className={style.notify}>
				{`Error with user's authorization data`}
			</div>
		</div>,
		document.getElementById('notification-root')
	);
