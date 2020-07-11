import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/pages/top.module.scss';
import Parts from './../../config/parts';
import urls from './../../config/outerUrls';
import Draggable from 'react-draggable';

const Top = ({title}) => {

	return (
		<div className={Styles.AppHeader}>
			<p className={Styles.mainTitle}>
				{title}
			</p>
			<Draggable
				axis="both"
				handle=".handle"
				defaultPosition={{x:0,y:0}}
				grid={[1, 1]}
				scale={1}
			>
				<img
					src={logo}
					className={`handle ${Styles.AppLogo}`}
					alt="logo"
				/>
			</Draggable>
			<Parts.Link
				url={urls.ReactOfficial.Support}
				linkText="> Go to Support"
			/>
		</div>
	);
}

export default Top;
