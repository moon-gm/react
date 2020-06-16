import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/parts/header.module.scss'

const Header = ({states, pages, func}) => {
	return (
		<header className="header">
			<ul className={Styles.headerList}>
				<li className={Styles.headerLogo}>
					<img
						src={logo}
						alt="logo"
						className={Styles.animation}
					/>
				</li>
				<li className={Styles.headerTitle}>
					{states.page === 0 && "React Learning"}
					{states.page === 1 && pages[1].name }
					{states.page === 2 && pages[2].name }
				</li>
				<li
					className={Styles.menuBtn}
					onClick={func}
				>
					≡
				</li>
			</ul>
		</header>
);
}

export default Header;
