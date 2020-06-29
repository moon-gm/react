import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactSyntaxHighlighter = ({title}) => {
	return (
		<div className="page-layout">


			<h2 className="h2">
				1. react-syntax-highlighterとは
			</h2>
				<p className="p">
					ソースコードを表示させる際に、コードの種別に合わせてハイライトして見やすく表示するライブラリ<br/>
					様々なスタイルが元々入っているため、設定で色合いを変更できる
				</p>
				<p className="p">
					以下のJSサンプルのように、ソースコードの種別に合わせて文字が自動でハイライトする
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code1}
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
						$ npm install react-syntax-highlighter --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-syntax-highlighter」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<p className="p">
					① 以下のようにインポートし、「SyntaxHighlighter」をコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにスタイルをインポートし、コンポーネントの「style」propsで使用できるように設定<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、外からソースコード(codeString)、使用する言語(language)を渡して使用できるように設定<br/>
					※「language」propsで指定した言語でソースコードを判断し、文字をハイライトする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</p>
				<p className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section1.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</p>
				<h3 className="h3">
					3-2. 呼び出し側の設定
				</h3>
				<p className="p">
					① 3-1で作成したコンポーネントを使いたい場所でインポート<br/>
					② 「codeString」propsに表示させたいソースコードを渡す<br/>
					③ 「language」propsに読ませたい言語を渡す<br/>
				</p>

				<h3 className="h3">
					3-3. スタイルの設定
				</h3>
				<p className="p">
					現在では以下のカラーが設定可能
				</p>
				<p className="p">
					dark<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.dark}
					/><br/>
					coy<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.coy}
					/><br/>
					funky<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.funky}
					/><br/>
					okaidia<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.okaidia}
					/><br/>
					solarizedlight<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.solarizedlight}
					/><br/>
					tomorrow<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.tomorrow}
					/><br/>
					twilight<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.twilight}
					/><br/>
					prism<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.prism}
					/><br/>
					atomDark<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.atomDark}
					/><br/>
					base16AteliersulphurpoolLight<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.base16AteliersulphurpoolLight}
					/><br/>
					cb<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.cb}
					/><br/>
					darcula<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.darcula}
					/><br/>
					duotoneDark<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneDark}
					/><br/>
					duotoneEarth<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneEarth}
					/><br/>
					duotoneForest<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneForest}
					/><br/>
					duotoneLight<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneLight}
					/><br/>
					duotoneSea<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneSea}
					/><br/>
					duotoneSpace<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.duotoneSpace}
					/><br/>
					ghcolors<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.ghcolors}
					/><br/>
					hopscotch<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.hopscotch}
					/><br/>
					pojoaque<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.pojoaque}
					/><br/>
					vs<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.vs}
					/><br/>
					xonokai<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section1.code4}
						codeColor={codes.styles.xonokai}
					/><br/>
				</p>

		</div>
	);
}

export default ReactSyntaxHighlighter;
