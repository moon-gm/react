import React from 'react';
import LittleList from './../parts/littleList'
import States from "./../../config/states";

const LittleListRouter = ({states, listNeeds}) => {
	return (
		<>
			{console.log({"LittleListRouter": listNeeds})}
			{/* 1. 環境構築の子リスト */}
			{listNeeds.state.list === States.list1.name && states.list1 === States.list1.show && <LittleList listNeeds={listNeeds} />}
			{/* 2. データ関連の子リスト */}
			{listNeeds.state.list === States.list2.name && states.list2 === States.list2.show && <LittleList listNeeds={listNeeds} />}
		</>
	);
}

export default LittleListRouter;
