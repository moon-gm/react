import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const CustomHook = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. カスタムフックの作成方法
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

			<h2 className="h2">
				2. フック導入背景
			</h2>
				<p className="p">
					根本として、クラスを使わないようにするための導入である。<br/>
					Reactにおいてクラスとは、コードの再利用や整頓が難しくなるなど障壁となり得る点が多いからである。
					functionやメソッドなどのイベントハンドラでは、「this」をbindしなくてはならなかったりとコードが冗長になりがちである。
					また、ホットリローディングも不安定になり、信頼できないものとなってしまう点などがあげられる
				</p>

			<h2 className="h2">
				3. フックのルール
			</h2>
				<p className="p">
					フックは JavaScript の関数だが、それらを使う際には以下の2つのルールに従う必要がある
				</p>

				<h3 className="h3">
					3-1. 呼び出すのはトップレベルのみ
				</h3>
				<p className="p">
					フックをループや条件分岐、あるいはネストされた関数内で呼び出してはいけない。
					なぜなら、Reactは初回レンダー時、更新のレンダー時でフックが呼び出される順序を元にしているため、
					条件分岐や、ループを行うとその回数・順序が狂い、バグが発生するからである
				</p>

				<h3 className="h3">
					3-2. 呼び出すのはReactの関数内のみ
				</h3>
				<p className="p">
					フックを通常のJavaScript関数から呼び出してはいけない。以下のにパターンなら呼び出し可能である。<br/>
					・Reactの関数コンポーネント内<br/>
					・自作のカスタムフック内
				</p>
				<p className="p">
					カスタムフックはセクション<span className="page-jump" onClick={allData[6].children[2].func}>[ {allData[6].children[2].name} ]</span>で解説
				</p>

		</div>
	);
}

export default CustomHook;
