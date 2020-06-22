import React from 'react';
import logo from './../../images/logo.svg';
import Router from './../../config/routes';
import Styles from './../../sass/parts/header.module.scss';

const Header = ({allData, states, func}) => {
	return (
		<header className="header">
			<ul className={Styles.headerList}>

				{/* ヘッダーロゴ - start - */}
					<li className={`${Styles.headerLogo} ${Styles.item}`}>
						<img
							src={logo}
							alt="logo"
							className={Styles.animation}
						/>
					</li>
				{/* ヘッダーロゴ - end - */}

				{/* ヘッダータイトル - start - */}
					<li className={`${Styles.headerTitle} ${Styles.item}`}>
						<Router.Header
							allData={allData}
							states={states}
						/>
					</li>
				{/* ヘッダータイトル - end - */}

				{/* メニューボタンPC - start - */}
					<li
						className={Styles.menuBtnPC}
						onClick={func}
						id="menuBtnPC"
					>
						{states.menu === "show" && "Close Menu ▲"}
						{states.menu === "hide" && "Open Menu ▼"}
					</li>
				{/* メニューボタン - end - */}

				{/* メニューボタンSP - start - */}
					<li
						className={Styles.menuBtnSP}
						onClick={func}
						id="menuBtnSP"
					>
						≡
					</li>
				{/* メニューボタンSP - end - */}

			</ul>
		</header>
);
}

export default Header;
