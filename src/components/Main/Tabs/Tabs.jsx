import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {asssignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text/Text';

const LIST = [
	{value: 'Home', Icon: HomeIcon},
	{value: 'Top', Icon: TopIcon},
	{value: 'Best', Icon: BestIcon},
	{value: 'Hot', Icon: HotIcon},
].map(asssignId);

export const Tabs = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isDropdown, setIsDropdown] = useState(true);
	const [activeTab, setActiveTab] = useState('Main');

	const handleResize = () => {
		if (document.documentElement.clientWidth < 768) {
			setIsDropdown(true);
		} else {
			setIsDropdown(false);
		}
	};

	useEffect(() => {
		const debounceResize = debounceRaf(handleResize);
		debounceResize();
		window.addEventListener('resize', debounceResize);
		return () => window.removeEventListener('resize', debounceResize);
	}, []);

	return (
		<div className={style.container}>
			{isDropdown && <div className={style.wrapperBtn}>
				<button className={style.btn} onClick={() =>
					setIsDropdownOpen(!isDropdownOpen)}>
					{activeTab}
					<ArrowIcon width={15} height={15}/>
				</button>
			</div>}
			{(isDropdownOpen || !isDropdown) && <ul className={style.list}
				onClick={() => setIsDropdownOpen(false)}>
				{LIST.map(({value, id, Icon}) => (
					<Text As='li' className={style.item} key={id}>
						<button className={style.btn}
							onClick={() => setActiveTab(value)}>
							{value}
							{Icon && <Icon width={30} height={30}/>}
						</button>
					</Text>
				))}
			</ul>}
		</div>
	);
};

Tabs.propTypes = {
	list: PropTypes.array,
	setList: PropTypes.func,
};
