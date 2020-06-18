import React from 'react';
import Styles from './../../sass/parts/aside.module.scss';
import LittleListRouter from './../router/littleListRouter';

const Aside = ({pages, states}) => {

	// 変数初期値定義
	var listNeeds = {};

	return (
		<aside className="aside">
			<ul>
				{ //サイドメニュー一覧をループで作成
					pages.map(page => {
						console.log(pages);

						// 子リストがなければ以下で作成
						if (page.children === undefined || page.children === null) {
							return (
								// 親リスト
								<li
									className={Styles.sideList}
									onClick={page.func}
									id={page.state.page}
									key={page.state.page}
								>
									<span className={Styles.sideListText}>
										{page.name}
									</span>
								</li>
							);
						}

						// 子リストがあれば以下で作成
						else {
							return (
								<>
									{/* 親リスト */}
									<li
										className={Styles.sideList}
										onClick={page.func}
										id={page.state.page}
									>
										<span className={Styles.sideListText}>
											{page.name}
										</span>
									</li>

									{ /* 子リストをループで作成 */
										page.children.map(item => {

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

											return (
												// 子リストのルート設定
												<LittleListRouter
													states={states}
													listNeeds={listNeeds}
												/>
											);
										})
									}
								</>
							);
						}
					})
				}
			</ul>
		</aside>
	);
}

export default Aside;
