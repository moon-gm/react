import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/parts/header.module.scss'

const Header = ({func}) => {
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
					React Learning
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
