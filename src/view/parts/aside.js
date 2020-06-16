import React from 'react';
import Styles from './../../sass/parts/aside.module.scss'

const Aside = ({pages}) => {
	return (
		<aside className="aside">
			<ul>
				{ //サイドメニュー一覧をループで作成
					pages.map(page => {
						return (
							<li
								className={Styles.sideList}
								onClick={page.func}
								id={page.state}
							>
								<span className={Styles.sideListText}>
									{page.name}
								</span>
							</li>
						);
					})
				}
			</ul>
		</aside>
	);
}

export default Aside;
