
import React from 'react'
import codes from './../../../config/codes'
import Parts from './../../../config/parts'

const ReactOnclickoutside = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-onclickoutsideとは
			</h2>
				<p className="p">
					要素（コンポーネント）の外部をクリックした時の動作を指定できるライブラリ<br/>
					「export defalt」の際に、動作を付与したいコンポーネントを引数に入れるだけで指定できる
				</p>
				<p className="p">
					サンプル
				</p>
				<Parts.OnClickOutside/>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-onclickoutside --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-onclickoutside」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. 任意のコンポーネントに機能を適用
				</h3>
				<div className="p">
					① 以下のようにインポートし、「onClickOutside」をfunctionとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section17.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにコンポーネント外を押した時の処理を設定
					<p className="p">
						※「handleClickOutside」というメソッド名にすることで、自動で実行してくれる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section17.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを①のfunctionの引数に入れ、エクスポート
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section17.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section17.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>

		</div>
	);
}

export default ReactOnclickoutside;
