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
				1-1. クラスコンポーネントでの実装
			</h2>
				<p className="p">
					まず、クラスコンポーネントで「state」を扱って記述したソースが以下である
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code1}
					codeColor={codes.styles.tomorrow}
				/>
				<h3 className="h3">
					◆ stateの設定・更新
				</h3>
				<p className="p">
					stateはconstructorで{"{count: 0}"}として初期値を定義し、ユーザがボタンをクリックした時に
					this.setState()を呼ぶことでstate.countの値を変更する。
				</p>
				<h3 className="h3">
					◆ stateの呼び出し
				</h3>
				<p className="p">
					クラス内では{"{this.state.count}"}でstateの現在値を呼び出すことができる。
				</p>

			<h2 className="h2">
				1-2. フックを使った場合
			</h2>
				<p className="p">
					次に、フックを利用して関数コンポーネントで記述したものが以下である
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code2}
					codeColor={codes.styles.tomorrow}
				/>
				<h3 className="h3">
					◆ stateの設定・更新
				</h3>
				<p className="p">
					useStateを上記のように{"{}"}で括ってインポートし、呼び出す際は初期値を引数として渡す。
					constにて関数とセットで配列で定義し、stateを変化させる場合は、第2引数の関数(setCount())を使用し、変化させる値を引数に渡す。
				</p>
				<p className="p">
					※フック導入以前は、stateを利用する際には、クラスコンポーネントでなければならなかったが、
					フックを導入することで、関数コンポーネントでのstateの使用も可能となった。
				</p>
				<h3 className="h3">
					◆ stateの呼び出し
				</h3>
				<p className="p">
					関数内では{"{count}"}でstateの現在値を呼び出すことができる。
				</p>

			<h1 className="h1">
				2. 副作用フック(useEffect)
			</h1>
				<p className="p">
					ReactがDOMを更新した後で追加のコードを実行したいという場合に用いるフック<br/>
					クリーンアップを必要とする場合は、APIなどから値を取得し、データの漏洩を防ぐために、リセットする必要がある。
				</p>
			<h2 className="h2">
				2-1. クラスコンポーネントでの実装
			</h2>
				<p className="p">
					まず、クラスコンポーネントで「state」を扱って記述したソースが以下である
				</p>
				<h3 className="h3">
					◆ クリーンアップが不要な副作用
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code3}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					Reactのクラスコンポーネントでは、renderメソッドの時点で副作用を起こすべきではない。
					そのため副作用はを用いる。
				</p>
				<p className="p">
					この場合、初回レンダー時に呼ばれる「componentDidMount」、
					更新時のレンダーで呼ばれる「componentDidUpdate」で、同じ処理を書かねばならない
				</p>
				<h3 className="h3">
					◆ クリーンアップを有する副作用
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code6}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					データの取得を「componentDidMount」で行い、クリーンアップを「componentWillUnmount」で行う。<br/>
					ここで、「componentDidMount」、「componentWillMount」は互いに鏡のような対応をしないといけない。
				</p>

			<h2 className="h2">
				2-2. フックを使った場合
			</h2>
				<p className="p">
					次に、フックを利用して関数コンポーネントで記述したものが以下である
				</p>
				<h3 className="h3">
					◆ クリーンアップが不要な副作用
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code4}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					フックを利用した場合、「useEffect」はレンダー後に毎回実行されるため、
					「componentDidMount」、「componentDidUpdate」の両側面を含む。
					その使い分けは、第2引数に「[]（空配列）」を渡すことで、初回レンダー時のみの実行に設定できる。
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code5}
					codeColor={codes.styles.tomorrow}
				/>
				<h3 className="h3">
					◆ クリーンアップを有する副作用
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section2.code7}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					「useEffect」は、取得を開始するコードと、解除するコードは密接のため、一緒に描けるよう設計されている。
				</p>

		</div>
	);
}

export default HowToUseHook;
