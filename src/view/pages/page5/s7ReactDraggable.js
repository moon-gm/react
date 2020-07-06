import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactDraggable = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-draggableとは
			</h2>
				<p className="p">
					囲んだ要素をドラッグできるようにするコンポーネント<br/>
					LocalStorageやStateを使えば、配置を記憶してドラッグした位置から表示もできる
				</p>
				<p className="p">
					サンプル
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section2.code1}
						codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-draggable --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-draggable」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「SyntaxHighlighter」をコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section2.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにスタイルをインポートし、コンポーネントの「style」propsで使用できるように設定<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section2.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、外からソースコード(codeString)、使用する言語(language)を渡して使用できるように設定<br/>
					※「language」propsで指定した言語でソースコードを判断し、文字をハイライトする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section2.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section2.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>
				<h3 className="h3">
					3-2. 呼び出し側の設定
				</h3>
				<p className="p">
					① 3-1で作成したコンポーネントを使いたい場所でインポート<br/>
					② 「codeString」propsに表示させたいソースコードを渡す<br/>
					③ 「language」propsに読ませたい言語を渡す<br/>
				</p>

		</div>
	);
}

export default ReactDraggable;
