import React from 'react';
import LittleList from './../parts/littleList'

const LittleListRouter = ({states, listNeeds}) => {
	return (
		<>
			{/* 1. 環境構築の子リスト */}
			{listNeeds.state.list === "list1" && states.list1 === "show" && <LittleList listNeeds={listNeeds} />}
			{/* 2. データ関連の子リスト */}
			{listNeeds.state.list === "list2" && states.list2 === "show" && <LittleList listNeeds={listNeeds} />}
		</>
	);
}

export default LittleListRouter;
