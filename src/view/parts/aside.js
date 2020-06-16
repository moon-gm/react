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
								{page.name}
							</li>
						);
					})
				}
			</ul>
		</aside>
	);
}

export default Aside;
