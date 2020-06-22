import React from 'react';
import States from "../../config/states";

const HeaderRouter = ({allData, states}) => {

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
}

export default HeaderRouter;
