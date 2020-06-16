import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/parts/logo.module.scss';

const Top = ({comment}) => {

	return (
		<div className={Styles.App}>
			<header className={Styles.AppHeader}>
				<img
					src={logo}
					className={Styles.AppLogo}
					alt="logo"
				/>
				<p>
					Page {comment}
				</p>
				<a
					className={Styles.AppLink}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Top;
