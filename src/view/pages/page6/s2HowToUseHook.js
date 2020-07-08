import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const HowToUseHook = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h1 className="h1">
				1. ステートフック(useState)
			</h1>
			<h2 className="h2">
				1-1. クラスコンポーネントで比較
			</h2>
				<p className="p">
					React 16.8 で追加された新機能で、「state」などのReactの機能が、クラスコンポーネントとして書かずに使えるようになる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				1-2. フックを使った場合
			</h2>

			<h1 className="h1">
				2. 副作用フック(useEffect)
			</h1>
			<h2 className="h2">
				2-1. クラスコンポーネントで比較
			</h2>

			<h2 className="h2">
				2-2. フックを使った場合
			</h2>

		</div>
	);
}

export default HowToUseHook;
