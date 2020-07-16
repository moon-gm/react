import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactModal = ({title}) => {

	const tableData = [
		{propsName: "isOpen", roll: "モーダル表示させるStateなどの条件を設定",},
		{propsName: "onAfterOpen", roll: "モーダル表示した後に実行する関数を設定",},
		{propsName: "onRequestClose", roll: "モーダルを閉じる際に実行する関数を設定",},
		{propsName: "style", roll: "モーダル（content）と背景(overlay)のCSS設定。上記サンプルコードのようにJSON形式で指定",},
		{propsName: "contentLabel", roll: "モーダルのラベル名を設定",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-modalとは
			</h2>
				<p className="p">
					モーダルウィンドウを表示するコンポーネント
				</p>
				<p className="p">
					以下のボタンを押すとモーダルウィンドウを表示するサンプル
				</p>
				<div className="p">
					<Parts.Modal
						openBtn="モーダルを開く"
						title="サンプルタイトル"
						content="ここに記述したい内容を表示させる"
					/>
				</div>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-modal --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-modal」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Modal」をコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section9.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のように、どの範囲にモーダル表示させるかを設定する
					<p className="p">
						※基本画面全体に表示させる為、トップレベルのレンダリングのIDを指定
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section9.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにモーダルを表示した際などの処理を設定
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section9.code3}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					④ 以下のように、モーダルを表示させるボタンを実装
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section9.code4}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					⑤ 以下のように、Modalコンポーネントを作成し、表示させたい内容は囲って設定
					<p className="p">
						※propsについては、下記の項目で解説
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section9.code5}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section9.code6}
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
export default ReactModal;
