import React from 'react';
import Environment from './../pages/environment';
import EnvironmentM from './../pages/environmentManual';
import AboutState from './../pages/aboutState';
import AboutProps from './../pages/aboutProps';
import AboutEnv from './../pages/aboutEnv';

import States from "./../../config/states";
import PageComponents from "./../../config/pageComponents";

const Router = ({allData, states, route}) => {

	// ページの切替
	if (route === "page") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && <PageComponents.Top name={allData[0].name} />}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && <Environment title={allData[1].children[0].name} />}
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && <EnvironmentM title={allData[1].children[1].name} />}

				{/* 2. データ関連ページ */}
				{/* Section1 */}
				{states.page === States.page.Page2.S1 && <AboutState title={allData[2].children[0].name} />}
				{/* Section2 */}
				{states.page === States.page.Page2.S2 && <AboutProps title={allData[2].children[1].name} />}
				{/* Section3 */}
				{states.page === States.page.Page2.S3 && <AboutEnv title={allData[2].children[2].name} />}

			</>
		);
	}

	// ヘッダーのタイトルの切替
	else if (route === "header") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && allData[0].name}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && allData[1].children[0].name }
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && allData[1].children[1].name }

				{/* 2. データ関連ページ */}
				{/* Section1 */}
				{states.page === States.page.Page2.S1 && allData[2].children[0].name}
				{/* Section2 */}
				{states.page === States.page.Page2.S2 && allData[2].children[1].name}
				{/* Section3 */}
				{states.page === States.page.Page2.S3 && allData[2].children[2].name}
			</>
		);
	} else {

	}

}

export default Router;
