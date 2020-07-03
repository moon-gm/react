import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactSelect = ({title}) => {

	const options = [
		{value: "Sample1", label: "サンプル１"},
		{value: "Sample2", label: "サンプル2"}
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-selectとは
			</h2>
				<p className="p">
					セレクトボックスを拡張機能を含め使用できるライブラリ<br/>
					文字を入力してプルダウンの選択肢を検索したり、Propsを使って複数選択したりなどの設定ができる
				</p>
				<div className="p">
					以下はコンポーネントをインポートしたのみのデフォルトのセレクトボックスである
					<Parts.Select options={options} />
				</div>


			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-select --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-select」が追加
				</p>

			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Select」をコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のように「options」を定義する<br/>
					※「options」は配列にして渡し、各選択肢には「value」と「label」の設定が必要である<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、Propsに上記で定義した選択肢情報(options)を渡して使用できるように設定<br/><br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section3.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-2. Propsの種類
				</h3>
				<p className="p">
					以下のPropsが設定可能である
				</p>
		</div>
	);
}

export default ReactSelect;
