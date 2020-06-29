import React from 'react';
import codes from '../../config/codes/page2';
import Parts from '../../config/parts';

const HowToCreateComponent = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. import
			</h2>
				<Parts.Code createCode={codes.Section3.code1} />
				<p className="p">
				->Reactコンポーネントを作成する際に必須<br/>
				※最低これだけインポートしておけばコンポーネントは作成できる
				</p>
				<Parts.Code createCode={codes.Section3.code1} />
				<p className="p">
				->ReactをHTMLにレンダリングする際などに使用<br/>
				※HTMLのどこにレンダリングするかなど、トップレベルのみの設定で、ほとんどのコンポーネントでは使用しない
				</p>
				<Parts.Code createCode={codes.Section3.code1} />
				<p className="p">
				->インポートしたコンポーネントのみに当たるCSSモジュール<br/>
				※ファイル名は「〜.module.(s)css」でないと効かない
				</p>
				<Parts.Code createCode={codes.Section3.code1} />
				<p className="p">
				->画像のパスを指定すればインポートして使える<br/>
				</p>

			<h2 className="h2">
				2. export
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
				</p>
				<p className="p">
					※１ React Fraagment（{"<React.Fragment></React.Fragment"}）の省略である。ループをしてkeyをつける場合は、正式に書く必要がある<br/>
					※２  {"「<img>」は「<img/>」か「<img></img>」"}とする必要がある
				</p>

		</div>
	);
}

export default HowToCreateComponent;
