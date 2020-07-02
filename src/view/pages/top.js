import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/pages/top.module.scss';
import Parts from './../../config/parts';
import urls from './../../config/outerUrls';

const Top = ({title}) => {

	return (
		<div className={Styles.AppHeader}>
			<p className={Styles.mainTitle}>
				{title}
			</p>
			<img
				src={logo}
				className={Styles.AppLogo}
				alt="logo"
			/>
			<Parts.Link
				url={urls.ReactOfficial.Support}
				linkText="> Go to Support"
			/>
		</div>
	);
}

export default Top;
