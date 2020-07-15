import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactSelect = ({title}) => {

	const options = [
		{value: "Sample1", label: "サンプル１"},
		{value: "Sample2", label: "サンプル2"},
		{value: "Apple", label: "りんご"},
		{value: "Pineapple", label: "パイナップル"},
		{value: "Grape", label: "ぶどう"},
		{value: "Melon", label: "メロン"},
	];

	const tableData = [
		{propsName: "autoFocus", roll: "描画時テキストエリアをFocusさせる"},
		{propsName: "className", roll: "className指定"},
		{propsName: "classNamePrefix", roll: "指定した接頭辞を持つclassNameを適用"},
		{propsName: "isDisabled", roll: "disableのコントール"},
		{propsName: "isMulti", roll: "複数選択可能か指定"},
		{propsName: "isSearchable", roll: "検索機能を付けられる。一致するoptionの絞り込み機能"},
		{propsName: "name", roll: "name"},
		{propsName: "onChange", roll: "入力データ変化時のonChangeイベント"},
		{propsName: "options", roll: "Selectの選択肢（option配列）"},
		{propsName: "placeholder", roll: "プレースホルダー"},
		{propsName: "value", roll: "value"},
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
				<p className="p">
					以下はコンポーネントをインポートしたのみのデフォルトのセレクトボックスである
				</p>
				<div className="p">
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
					① 以下のようにインポートし、「Select」をコンポーネントとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のように「options」を定義する
					<p className="p">
						※「options」は配列にして渡し、各選択肢には「value」と「label」の設定が必要である
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、Propsに上記で定義した選択肢情報(options)を渡して使用できるように設定
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section3.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード
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
				<Parts.TableForProps tableData={tableData} />

			<h2 className="h2">
				4. Propsを利用した場合
			</h2>
				<h3 className="h3">
					4-1. autoFocus
				</h3>
				<p className="p">
					描画時にテキストエリアをfocusする
				</p>
				<div className="p">
					<Parts.Select options={options} autoFocus/>
				</div>

				<h3 className="h3">
					4-2. isMulti
				</h3>
				<p className="p">
					設定することで複数の選択項目を選択できるようになる
				</p>
				<div className="p">
					<Parts.Select options={options} isMulti/>
				</div>

				<h3 className="h3">
					4-3. isSearchable
				</h3>
				<p className="p">
					設定することで、選択項目の検索が可能になる
				</p>
				<div className="p">
					<Parts.Select options={options} isSearchable/>
				</div>

				<h3 className="h3">
					4-4. isDisabled
				</h3>
				<p className="p">
					設定することで、要素がdisabledとなり選択不可となる
				</p>
				<div className="p">
					<Parts.Select options={options} isDisabled/>
				</div>

		</div>
	);
}

export default ReactSelect;
