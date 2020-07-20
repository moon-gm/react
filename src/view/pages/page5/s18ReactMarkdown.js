
import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';
import Styles from './../../../sass/parts/markdown.module.scss';
import Markdown from 'react-markdown';

const ReactMarkdown = ({title}) => {

	const markdown = (
		'# 見出し 1\n' +
		'## 見出し 2\n' +
		'### 見出し 3\n' +
		'#### 見出し 4\n' +
		'---\n' +
		'- リスト 1\n' +
		'- リスト 2\n' +
		'  - リスト 2-1\n' +
		'1. 番号付きリスト 1\n' +
		'2. 番号付きリスト 2\n' +
		'3. 番号付きリスト 3\n\n' +
		'[リンク](http://...)\n\n' +
		'**強調**\n' +
		'```javascript:filename.js\n' +
		'import Markdown from \'react-markdown\';\n' +
		'```'
	);

	const tableData =[
		{propsName: "source / children", roll: "マークダウンのソースをセットする",},
		{propsName: "className", roll: "コンテナ要素にクラスを指定できる",},
		{propsName: "escapeHtml", roll: "セットすることでMarkdown内でHTMLを使えるようにする",},
		{propsName: "skipHtml", roll: "セットすることでHTMLをスキップする",},
		{propsName: "sourcePos", roll: "「data-...」の自作属性を追加できる",},
		{propsName: "allowedTypes", roll: "許可するNodeのタイプを指定",},
		{propsName: "linkTarget", roll: "aタグに「target」属性を設定",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-markdownとは
			</h2>
				<p className="p">
					マークダウンで記述したものをHTMLに変換するライブラリ<br/>
					細かいCSSは自分で設定
				</p>
				<p className={`p ${Styles.markdown}`}>
					<Markdown
						source={markdown}
						escapeHtml={false}
						linkTarget="_blank"
					/>
				</p>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-markdown --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-markdown」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Markdown」をコンポーネントとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section18.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のように、表示させたいMarkdownで記述したものを定義
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section18.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、「source」propsに②で定義したものを指定
					<p className="p">
						※ Propsについては以下の項目で解説
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section18.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section18.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>
				<h3 className="h3">
					3-2. Propsの種類
				</h3>
				<Parts.TableForProps tableData={tableData} />

		</div>
	);
}

export default ReactMarkdown;
