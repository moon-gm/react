
import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactHelmet = ({title}) => {

	const tableData =[
		{propsName: "base", roll: "baseタグの指定内容を渡せる",},
		{propsName: "bodyAttributes", roll: "bodyタグの属性を追加できる",},
		{propsName: "htmlAttributes", roll: "htmlタグの属性を追加できる",},
		{propsName: "link", roll: "linkタグの指定内容を渡せる",},
		{propsName: "meta", roll: "metaタグの指定内容を渡せる",},
		{propsName: "noscript", roll: "noscriptタグの指定内容を渡せる",},
		{propsName: "script", roll: "scriptタグの指定内容を渡せる",},
		{propsName: "style", roll: "styleタグの指定内容を渡せる",},
		{propsName: "title", roll: "titleタグの指定内容を渡せる",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-helmetとは
			</h2>
				<p className="p">
					headタグの管理をするコンポーネント
				</p>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-helmet --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-helmet」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Helmet」をコンポーネントとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section15.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにHeadタグに指定したい内容を「Helmet」タグで囲って設定
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section15.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ Propsで渡すことも可能である
					<p className="p">
						※以下の項目で解説
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section15.code3}
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
export default ReactHelmet;
