import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';
import Styles from './../../../sass/parts/draggable.module.scss';
import Draggable from 'react-draggable';

const ReactDraggable = ({title}) => {
	const tableData = [
		{
			propsName: "axis",
			roll: "ドラッグする方向を設定 / x: 水平方向, y: 垂直方向, both: xy両方向",
		},
		{
			propsName: "handle",
			roll: "ドラッグさせたい要素のクラス名、id名を指定する",
		},
		{
			propsName: "grid",
			roll: "ドラッグ時の移動幅の設定",
		},
		{
			propsName: "scale",
			roll: "ドラッグ時のカーソルに対する、要素の追跡速度の設定",
		},
		{
			propsName: "defaultPosition",
			roll: "positionが指定されていない場合のデフォルトの位置設定",
		},
		{
			propsName: "position",
			roll: "要素の配置を設定",
		},
		{
			propsName: "onStart",
			roll: "ドラッグ開始時に行いたい処理を設定できる",
		},
		{
			propsName: "onDrag",
			roll: "ドラッグ中に行いたい処理を設定できる",
		},
		{
			propsName: "onStop",
			roll: "ドラッグ停止時に行いたい処理を設定できる",
		},
	];
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-draggableとは
			</h2>
				<p className="p">
					囲んだ要素をドラッグできるようにするコンポーネント<br/>
					LocalStorageやStateを使えば、配置を記憶してドラッグした位置からの表示もできる
				</p>
				<p className="p">
					サンプル
				</p>
				<Draggable
					axis="both"
					handle=".handle"
					defaultPosition={{x: 0, y: 0}}
					position={null}
					grid={[1, 1]}
					scale={1}
				>
					<div className="p handle">
						<div className={Styles.container}>
							<div className={`${Styles.header} ${Styles.flexBox}`}>
								<div>
									<span className={Styles.dotRed}>●</span>
									<span className={Styles.dotYellow}>●</span>
									<span className={Styles.dotGreen}>●</span>
								</div>
								<div className={Styles.cross}>
									×
								</div>
							</div>
							<div className={Styles.contents}>
								このパーツはドラッグで動かせます
							</div>
						</div>
					</div>
				</Draggable>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-draggable --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-draggable」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを使用
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Draggable」をコンポーネントとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section7.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにPropsを指定して、ドラッグさせたい要素をコンポーネントで囲む<br/>
					※Propsの詳細は「3-2のPropsの種類」を参照
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section7.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					(+α) 以下のように、ドラッグ時などの処理が必要であれば、メソッドを作成
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section7.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section7.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-2. Propsの種類
				</h3>
				<p className="p">
					以下のPropsが設定可能である
				</p>
				<div className="table-box">
					<table>
						<thead>
							<tr>
								<th>
									Props名
								</th>
								<th>
									役割
								</th>
							</tr>
						</thead>
						{
							tableData.map(item => {
								return (
									<tbody key={item.propsName}>
										<tr>
											<td>
												{item.propsName}
											</td>
											<td>
												{item.roll}
											</td>
										</tr>
									</tbody>
								);
							})
						}
					</table>
				</div>

		</div>
	);
}

export default ReactDraggable;
