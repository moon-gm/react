import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const CreateRolls = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. パーツとなるコンポーネントを作成
			</h2>
				<p className="p">
					セクション<span className="page-jump" onClick={allData[3].children[0].func}>[ {allData[3].children[0].name} ]</span>を参考に以下のように、ヘッダーエリア、メインコンテンツエリア、フッターエリアを作成<br/>
					作成したファイルは「./src/view/parts」に格納<br/>
					※State, Propsについては次セクション以降で解説
				</p>
				<div className="p">
					ヘッダーエリア(header.js)<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section2.code1}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					メインコンテンツエリア(mainContents.js)<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section2.code2}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					フッターエリア(footer.js)<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section2.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>

			<h2 className="h2">
				2. 切り替えるメインコンテンツのページコンポーネントを作成
			</h2>
				<p className="p">
					以下のようにページを切り替えるコンポーネントを作成（詳細はセクション<span className="page-jump" onClick={allData[4].children[1].func}>[ {allData[4].children[1].name} ]</span>）<br/>
					作成したファイルは「./src/view/routes」に格納し、インポートするページのコンポーネントは上記のヘッダーなどと同様に作成し、同階層に格納<br/>
					※State, Propsについては次セクション以降で解説
				</p>
				<div className="p">
					ページ切り替えコンポーネント(pageRouter.js)<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section2.code4}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<p className="p">
					※「page」というstateが「１」の時「Page1」を表示、「2」の時、「Page2」を表示する
				</p>

			<h2 className="h2">
				3. ベースとなるレイアウトコンポーネントを作成
			</h2>
				<p className="p">
					作成するレイアウトコンポーネントファイル(layout.js)は「./src/view」に格納<br/>
					※State, Propsについては次セクション以降で解説
				</p>
				<h3 className="h3">
					3-1. 作成したコンポーネントをインポート
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section2.code5}
					codeColor={codes.styles.tomorrow}
				/>
				<h3 className="h3">
					3-2. 作成したコンポーネントをタグとして使用
				</h3>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section2.code6}
					codeColor={codes.styles.tomorrow}
				/>
				<h3 className="h3">
					3-3. ReactDOMを設定
				</h3>
				<p className="p">
					ReactDOMをインポートし、HTMLでコンポーネントをレンダリングする箇所を設定<br/>
					「React.StrictMode」タグ内のコンポーネントが、指定したHTMLのidのタグ内にレンダリングされる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section2.code7}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					※「React.StrictMode」は無くてもレンダリングできるが、子孫要素に対して付加的な検査及警告が動くようになるので、エラーとなりそうなコードを書くとメッセージが出る
				</p>
				<div className="p">
					<Parts.Link
						url={urls.SrtictMode}
						linkText="? React StrictModeとは"
					/>
				</div>
				<h3 className="h3">
					3-4. レンダリングするHTMLの設定
				</h3>
				<p className="p">
					以下のように、コンポーネントをレンダリングしたいHTMLに、コンポーネント側で設定したidを付与した空タグを作成
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.html}
					codeString={codes.pages.Page3.Section2.code8}
					codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				4. ソース全容
			</h2>
				<p className="p">
					上記で作成したレイアウトのコンポーネント
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section2.code9}
					codeColor={codes.styles.tomorrow}
				/>

		</div>
	);
}

export default CreateRolls;
