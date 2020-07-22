import React from 'react';
import logo from './../../images/logo.svg';
import Styles from './../../sass/pages/top.module.scss';
import Parts from './../../config/parts';
import urls from './../../config/outerUrls';
import Draggable from 'react-draggable';
import SwipeableViews from 'react-swipeable-views';

const Top = ({title}) => {

	return (
		<div className={Styles.AppHeader}>
			<SwipeableViews enableMouseEvents>
				<div className={Styles.mainTitle}>
					{title}<br/>
					<p className={Styles.subTitle}>
						〜 This site 〜<br/>
						◀︎ Swipe here
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.NextLearning}>
						Next Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to Next.js site ↑ 〜<br/>
						◀︎ Swipe here ▶︎
					</p>
				</div>
				<div className={Styles.mainTitle}>
					<p onClick={() => window.location.href=urls.MySite.GatsbyLearning}>
						Gatsby Learning
					</p>
					<p className={Styles.subTitle}>
						〜 ↑ Click to Gatsby.js site ↑ 〜<br/>
						Swipe here ▶︎
					</p>
				</div>
			</SwipeableViews>
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
