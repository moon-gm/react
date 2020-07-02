import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const RoutingManual = ({title, allData}) => {
	return (
		<div className="page-layout">

			<p className="p">
				このセクションはURLを変更せず、SPA(Single Page Application)として実装する場合のルーティングである<br/>
				※アイコンの表示を切り替えたりなど、ページ丸ごとではなくパーツ単位で切り替えるやり方と同じように、ページごと切り替える
			</p>

			<h2 className="h2">
				1. ページコンポーネントを作成
			</h2>
				<p className="p">
					セクション<span className="page-jump" onClick={allData[3].children[0].func}>[ {allData[3].children[0].name} ]</span>を参考に以下のように、Page1、Page2を作成<br/>
					作成したファイルは「./src/view/pages」に格納<br/>
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page4.Section2.code1}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					const定義を「Page2」に変え、Page2も同様に作成
				</p>

			<h2 className="h2">
				2. ルーター作成
			</h2>
				<p className="p">
					ページをStateの値によって表示を切り替えるルーターを以下のように作成<br/>
					現在は２ページしかないので、簡易的に記述しているが、ページを配列で管理してmapでループなどを実装すると良い
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page4.Section2.code2}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					以下のように、ページコンポーネントと使用するstateがセットの配列を作成してループすれば、Pagesにページ情報を追加するだけルートしてくれるコンポーネントができる
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page4.Section2.code3}
						codeColor={codes.styles.tomorrow}
				/>

		</div>
	);
}

export default RoutingManual;
