import React from 'react';

const HeadRouter = ({states, pages}) => {
	return (
		<>
			{/* Topページ */}
			{states.page === 0 && pages[0].name}

			{/* 1. 環境構築ページ */}
			{/* Section1 */}
			{states.page === '1sec1' && pages[1].children[0].name }
			{/* Section2 */}
			{states.page === '1sec2' && pages[1].children[1].name }

			{/* 2. データ関連 */}
			{states.page === 2 && pages[2].name }
		</>
	);
}

export default HeadRouter;
