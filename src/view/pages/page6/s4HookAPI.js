import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const HookAPI = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. フックAPIリスト
			</h2>
				<p className="p">
					React 16.8 で追加された新機能で、「state」などのReactの機能が、クラスコンポーネントとして書かずに使えるようになる
				</p>
				<p className="p">
					フックとは、関連する機能に基づいて、1つのコンポーネントを複数の小さな関数に分割することを可能にする。<br/>
					React 16.8以前では、クラスコンポーネントでしか利用できなかった「state」などの機能が関数コンポーネント（function/constで作成）でも利用できるようになり、
					「React」のコンポーネントから切り出した機能の一部として、「useState」「useEffect」が代表的な「フック(Hook)」である
				</p>
				<h3 className="h3">
					サンプルコード
				</h3>
				<p className="p">
					「state」を扱う「useState」のサンプルコードである<br/>
					内容については次セクション<span className="page-jump" onClick={allData[6].children[1].func}>[ {allData[6].children[1].name} ]</span>で解説
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

		</div>
	);
}

export default HookAPI;
