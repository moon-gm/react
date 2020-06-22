import React from 'react';
import codes from '../../config/codes';
import Parts from '../../config/parts';

const aboutState = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. 初期値を定義
			</h2>
				<p className="p">
					クラスコンポーネントの「constructor」内で「this.state」で「xの初期値は0」と定義
				</p>
				<Parts.Code createCode={codes.Page2.Section1.code1} />

			<h2 className="h2">
				2. コンポーネントで使用
			</h2>
				<p className="p">
					コンポーネント内で「this.state.x」と記述するだけで、値を取得することができる
				</p>
				<Parts.Code createCode={codes.Page2.Section1.code2} />

			<h2 className="h2">
				3. メソッドでStateの値を変化
			</h2>
				<p className="p">
					今回は「func」というメソッドを以下のように作成<br/>
					→xの値が0だったら1、1だったら0にするメソッド
				</p>
				<Parts.Code createCode={codes.Page2.Section1.code3} />
				<p className="p">
					使用する側では「this.func.bind(this)」と記述<br/>
					→setStateは使用先に関わるので、func内でthisをバインドするため.bind(this)としている
				</p>
				<Parts.Code createCode={codes.Page2.Section1.code4} />
				<p className="p">
				これでボタンを押下することで、Stateが変わり、Stateに紐づいた表示を変化させられる<br/>
				→今回は、「Learn React」と「Try React」の表示切替のみ
				</p>

			<h2 className="h2">
				※ソース全文
			</h2>
				<Parts.Code createCode={codes.Page2.Section1.code5} />

		</div>
	);
}

export default aboutState;
