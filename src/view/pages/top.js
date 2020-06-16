import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/pages/top.module.scss';

const Top = ({name}) => {

	return (
		<div className={Styles.App}>
			<header className={Styles.AppHeader}>
				<p className={Styles.mainTitle}>
					{name}
				</p>
				<img
					src={logo}
					className={Styles.AppLogo}
					alt="logo"
				/>
				<a
					className={Styles.AppLink}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					> Go to Support
				</a>
			</header>
		</div>
	);
}

export default Top;
