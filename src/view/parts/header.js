import React from 'react';
import logo from './../../images/logo.svg';
import Router from './../router/router'
import Styles from './../../sass/parts/header.module.scss'

const Header = ({states, pages, func}) => {
	return (
		<header className="header">
			<ul className={Styles.headerList}>

				{/* ヘッダーロゴ - start - */}
					<li className={Styles.headerLogo}>
						<img
							src={logo}
							alt="logo"
							className={Styles.animation}
						/>
					</li>
				{/* ヘッダーロゴ - end - */}

				{/* ヘッダータイトル - start - */}
					<li className={Styles.headerTitle}>
						<Router
							pages={pages}
							states={states}
							route="header"
						/>
					</li>
				{/* ヘッダータイトル - end - */}

				{/* メニューボタン - start - */}
					<li
						className={Styles.menuBtn}
						onClick={func}
					>
						≡
					</li>
				{/* メニューボタン - end - */}

			</ul>
		</header>
);
}

export default Header;
