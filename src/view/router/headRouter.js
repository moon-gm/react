import React from 'react';
import States from "../../config/states";

const HeadRouter = ({states, pages}) => {
	return (
		<>
			{/* Topページ */}
			{states.page === States.page.Top && pages[0].name}

			{/* 1. 環境構築ページ */}
			{/* Section1 */}
			{states.page === States.page.Page1.S1 && pages[1].children[0].name }
			{/* Section2 */}
			{states.page === States.page.Page1.S2 && pages[1].children[1].name }

			{/* 2. データ関連 */}
			{states.page === States.page.Page2 && pages[2].name }
		</>
	);
}

export default HeadRouter;
