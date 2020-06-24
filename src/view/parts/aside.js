import React from 'react';
import Styles from './../../sass/parts/aside.module.scss';
import Router from './../../config/routes';

const Aside = ({allData, states}) => {

	// 変数初期値定義
	var listNeeds = {};

	return (
		<aside className="aside">
			<ul className={Styles.asideScroll}>
				{console.log({"AllPages": allData})}
				{ //サイドメニュー一覧をループで作成
					allData.map((pageData) => {

						// 子リストがなければ以下で作成
						if (pageData.children === void 0) {
							// 親リスト
							return (
								<li
									className={Styles.sideList}
									onClick={pageData.func}
									id={pageData.state.page}
									key={`key${pageData.state.page}`}
								>
									<span className={Styles.sideListText}>
										{pageData.name}
									</span>
								</li>
							);
						}

						// 子リストがあれば以下で作成
						else {
							// 親リスト
							return (
								<React.Fragment key={`flag${pageData.state.page}`}>
									<li
										className={Styles.sideList}
										onClick={pageData.func}
										id={pageData.state.page}
										key={`key${pageData.state.page}`}
									>
										<span className={Styles.sideListText}>
											{pageData.name}
										</span>
									</li>

									{ /* 子リストをループで作成 */
										pageData.children.map((item) => {

											// 子リストコンポーネントに渡すのに必要な情報の抽出
											listNeeds = {
												"sideList": Styles.sideList,
												"sideListChildren": Styles.sideListChildren,
												"sideListText": Styles.sideListText,
												"func": item.func,
												"state": {
													"page": item.state.page,
													"list": item.state.list,
												},
												"name": item.name,
											};
											// 子リストのルート設定
											return (
												<Router.LittleList
													listNeeds={listNeeds}
													states={states}
													key={`key${listNeeds.state.page}`}
												/>
											);
										})
									}
								</React.Fragment>
							);
						}
					})
				}
			</ul>
		</aside>
	);
}

export default Aside;
