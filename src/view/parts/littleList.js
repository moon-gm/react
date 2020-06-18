// サイドメニューの子リストの表示処理
import React from 'react';

function LittleList({listNeeds}) {
	return(
		// 子リスト
		<li
			className={`${listNeeds.sideList} ${listNeeds.sideListChildren}`}
			onClick={listNeeds.func}
			id={listNeeds.state.page}
		>
			<span className={listNeeds.sideListText}>
				{listNeeds.name}
				{console.log({"LittleList": listNeeds})}
			</span>
		</li>
	);
}

export default LittleList;
