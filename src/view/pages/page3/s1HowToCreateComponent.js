import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const HowToCreateComponent = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. Reactをインポート
			</h2>
				<h3 className="h3">
					1-1. コンポーネントに必須のインポート
				</h3>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section1.code1}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
				->Reactコンポーネントを作成する際に必須<br/>
				※最低これだけインポートしておけばコンポーネントは作成できる
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section1.code2}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
				->ReactをHTMLにレンダリングする際に使用<br/>
				※HTMLのどこにレンダリングするかなど、トップレベルのみの設定で、ほとんどのコンポーネントでは使用しない
				</p>
				<h3 className="h3">
					1-2. 必須ではないがよく使うインポート
				</h3>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section1.code3}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
				->インポートしたコンポーネントのみに当たるCSSモジュール<br/>
				※ファイル名は「〜.module.(s)css」でないと効かない<br/>
				※タグ内では、モジュールを使ってクラス指定する際、「-(ハイフン)」は使えないため、命名に気を付ける
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section1.code4}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
				->画像のパスを指定すればインポートして使える<br/>
				</p>

			<h2 className="h2">
				2. 作成したコンポーネントをエクスポート
			</h2>
				<h3 className="h3">
					2-1. 「export default (...)」でHTML風のタグをエクスポート
				</h3>
				<p className="p">
					① 「export default {"{ 追加処理 return (...) }"}」で複数行のJS処理を追加できる<br/>
					② 以下のソースのようにアロー関数で外から変数を渡すことも可能
				</p>
				<h3 className="h3">
					2-2. エクスポートするタグにおける記述方法
				</h3>
				<p className="p">
					① タグは、複数使う場合には必ず入れ子にして1つのみにするルールだが、「{"<>...</>"}※１」で囲えば複数のタグをエクスポートできる<br/>
					② {"{ }"}で括った箇所では１文のみのJSを追加できる（if文は簡略化しないと記述できない）<br/>
					③ 「class」は 「className」で指定する<br/>
					④ HTMLでは閉じタグがないものでも必ず閉じタグが必要である※２
					⑤ 作成するタグ名は通常のHTMLと区別するため、必ず大文字で始める
				</p>
				<p className="p">
					※１ React Fraagment（{"<React.Fragment></React.Fragment"}）の省略である。ループをしてkeyをつける場合は、正式に書く必要がある<br/>
					※２  {"「<img>」は「<img/>」か「<img></img>」"}とする必要がある
				</p>

			<h2 className="h2">
				3. 作成例
			</h2>
				<p className="p">
					コンポーネントの作成方法は様々だが、以下のように作成（詳細はセクション「3-4」にて）
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page3.Section1.code5}
						codeColor={codes.styles.tomorrow}
				/>

		</div>
	);
}

export default HowToCreateComponent;
