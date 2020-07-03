import React from 'react';
import Parts from './../../../config/parts';
import urls from './../../../config/outerUrls';

const LibaryList = ({title, allData}) => {
	return (
		<div className="page-layout">

			<p className="p">
				よく使いそうなライブラリを項目ごとに一覧化していく<br/>
				各ライブラリの詳細は、[]の青字のリンクまたはメニューから確認できる
			</p>

			<h2 className="h2">
				1.  UI系
			</h2>

				<h3 className="h3">
					React Syntax Highlighter
				</h3>
				<p className="p">
					ソースコードをハイライトして表示するコンポーネント<br/>
					多くのStyleが内包されてているため、Github風など様々設定できる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactSyntaxHighlighter}
						linkText="? React Syntax Highlighter"
					/>
				</p>

				<h3 className="h3">
					React Select
				</h3>
				<p className="p">
					セレクトボックスを拡張するコンポーネント<br/>
					文字を入力してプルダウンの選択肢を検索したり、Propsを使って複数選択したりなどの設定ができる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactSelect}
						linkText="? React Select"
					/>
					<br/>
					オフィシャルHP：
					<Parts.Link
						url={urls.ReactSelect}
						linkText="? React Select公式サイト"
					/>
				</p>

				<h3 className="h3">
					React Dropzone
				</h3>
				<p className="p">
					ファイルをドラッグアンドドロップできるようにするコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactDropzone}
						linkText="? React Dropzone"
					/>
				</p>

				<h3 className="h3">
					React Color
				</h3>
				<p className="p">
					カラーピッカーコンポーネント<br/>
					設定をすれば、選択したカラーを即時に指定した要素（コンポーネント）に適用もできる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactColor}
						linkText="? React Color"
					/>
				</p>

				<h3 className="h3">
					React Table
				</h3>
				<p className="p">
					テーブルコンポーネント<br/>
					Hooksを使用すれば、ソート・検索などの機能のみを自前のテーブルに実装することもできる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactTable}
						linkText="? React Table"
					/>
				</p>

				<h3 className="h3">
					React Draggable
				</h3>
				<p className="p">
					囲んだ要素をドラッグできるようにするコンポーネント<br/>
					LocalStorageやStateを使えば、配置を記憶してドラッグした位置から表示もできる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactDraggable}
						linkText="? React Draggable"
					/>
				</p>

				<h3 className="h3">
					React Swipeable Views
				</h3>
				<p className="p">
					囲った要素をスワイプ可能にするコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactSwipeableViews}
						linkText="? React Swipeable Views"
					/>
				</p>

				<h3 className="h3">
					React Modal
				</h3>
				<p className="p">
					モーダルウィンドウを表示するコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactModal}
						linkText="? React Modal"
					/>
				</p>

				<h3 className="h3">
					React Datepicker
				</h3>
				<p className="p">
					日付を選択できるカレンダーコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactDatepicker}
						linkText="? React Datepicker"
					/>
				</p>

				<h3 className="h3">
					Styled Components
				</h3>
				<p className="p">
					CSS in　JS / デザインを含んだコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.StyledComponents}
						linkText="? Styled Components"
					/>
				</p>

			<h2 className="h2">
				2. 機能拡張
			</h2>

				<h3 className="h3">
					React Redux
				</h3>
				<p className="p">
					ReduxとReactを連携するライブラリ<br/>
					State変更方法をReduxで管理する
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactRedux}
						linkText="? React Redux"
					/>
					<br/>
					オフィシャルHP：
					<Parts.Link
						url={urls.ReactRedux}
						linkText="? React Redux公式サイト"
					/>
				</p>

				<h3 className="h3">
					Prop Types
				</h3>
				<p className="p">
					型のチェックなどバリデーションを行うライブラリ<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.PropTypes}
						linkText="? Prop Types"
					/>
				</p>

				<h3 className="h3">
					React Router / React RouterDOM
				</h3>
				<p className="p">
					URLにパスを付与してルーティングできるようにするライブラリ<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactRouter}
						linkText="? React Router"
					/>{" / "}
					<Parts.Link
						url={urls.npm.ReactRouterDOM}
						linkText="? React RouterDOM"
					/>
				</p>

				<h3 className="h3">
					React Helmet
				</h3>
				<p className="p">
					headタグの管理をするコンポーネント<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactHelmet}
						linkText="? React Helmet"
					/>
				</p>

				<h3 className="h3">
					Classnames
				</h3>
				<p className="p">
					classNameにクラスを複数付与できるようにするライブラリ<br/>
					クラス名をObjectにして値にtrue/falseを入れると表示非表示の設定ができる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.Classnames}
						linkText="? Classnames"
					/>
				</p>

				<h3 className="h3">
					React onclickoutside
				</h3>
				<p className="p">
					要素（コンポーネント）の外部をクリックした時の動作を指定できるライブラリ<br/>
					「export defalt」の際に、動作を付与したいコンポーネントを引数に入れるだけで指定できる
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactOnclickoutside}
						linkText="? React onclickoutside"
					/>
				</p>

				<h3 className="h3">
					React Markdown
				</h3>
				<p className="p">
					マークダウンで記述したものをHTMLに変換するライブラリ<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactMarkdown}
						linkText="? React Markdown"
					/>
				</p>

			<h2 className="h2">
				3. 開発関連
			</h2>

				<h3 className="h3">
					React Scripts
				</h3>
				<p className="p">
					create react appをビルドして使用する際に実行するスクリプトライブラリ<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactScripts}
						linkText="? React Scripts"
					/>
				</p>

				<h3 className="h3">
					React Hot Loader
				</h3>
				<p className="p">
					ファイルを監視して変更があれば、ブラウザのリロードをせずに画面を更新するライブラリ<br/>
				</p>
				<p className="p">
					詳細セクション ：<span className="page-jump" onClick={allData[5].children[1].func}>[ {allData[5].children[1].name} ]</span><br/>
					npm概要ページ ：
					<Parts.Link
						url={urls.npm.ReactHotLoader}
						linkText="? React Hot Loader"
					/>
				</p>

		</div>
	);
}

export default LibaryList;
