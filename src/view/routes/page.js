import React from 'react';

// ページのルーティング設定
const PageRouter = ({allData, states}) => {
	return (
		<>
			{ // 全ページ設定情報（allData）をループして表示するページを設定
				allData.map(pageData => {
					// pageDataに子リスト(children)がない場合のルーティング
					if (pageData.children === void 0) {
						return (
							<React.Fragment key={`page${pageData.state.page}`}>
								{states.page === pageData.state.page && <pageData.Component title={pageData.name} allData={allData} />}
							</React.Fragment>
						);
					}

					// pageDataに子リスト(children)がある場合のルーティング
					else {
						return (
							<React.Fragment key={`page${pageData.state.page}`}>
								{ // 子リスト(children)がある個別ページ設定情報（pageData）をループして表示するページを設定
									pageData.children.map(pageDataWithC => {
										return (
											<React.Fragment key={`page${pageDataWithC.state.page}`}>
												{states.page === pageDataWithC.state.page && <pageDataWithC.Component title={pageDataWithC.name} allData={allData} />}
											</React.Fragment>
										);
									})
								}
							</React.Fragment>
						);
					}
				})
			}
		</>
	);
}

export default PageRouter;
