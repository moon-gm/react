import React from 'react';
import Styles from './../../sass/parts/aside.module.scss'

const Aside = ({pages, states}) => {
	return (
		<aside className="aside">
			<ul>
				{ //サイドメニュー一覧をループで作成
					pages.map(page => {
						if (page.children === undefined || page.children === null) {
							return (
								<li
									className={Styles.sideList}
									onClick={page.func}
									id={page.state}
									key={page.state}
								>
									<span className={Styles.sideListText}>
										{page.name}
									</span>
								</li>
							);
						} else {
							return (
								<>
									<li
										className={Styles.sideList}
										onClick={page.func}
										id={page.state}
									>
										<span className={Styles.sideListText}>
											{page.name}
										</span>
									</li>

									{
										page.children.map(item => {
											return (
												<>
													{states.list === "hide"}
													{states.list === "show" && (
														<li
															className={`${Styles.sideList} ${Styles.sideListChildren}`}
															onClick={item.func}
															id={item.state[1]}
															key={item.state[1]}
														>
															<span className={Styles.sideListText}>
																{item.name}
															</span>
														</li>)
													}
												</>
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
