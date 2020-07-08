import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const ReactDropzone = ({title}) => {

	const tableData = [
		{propsName: "onDrop", roll: "ドロップ時の処理"},
		{propsName: "accept", roll: "許容するファイルのMIME"},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-dropzoneとは
			</h2>
				<p className="p">
					ファイルをドラッグアンドドロップできるようにするコンポーネント<br/>
					hooksにも対応しており、機能のみの実装も可能である
				</p>
				<p className="p">
					ファイルをドロップするとファイル名などを右側に表示し、コンソールログに取得元のファイル情報が表示されるサンプル
				</p>
				<Parts.DropZone/>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-dropzone --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-dropzone」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントとして使用の場合
				</h3>
				<div className="p">
					① 以下のようにインポートし、「Dropzone」をコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにファイルドロップ時の処理を「onDrop」で設定<br/>
					※今回は取得したファイルをコンソールログで確認するのみ<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のようにコンポーネントを作成し、「onDrop」Propsに前述のメソッドを指定し、<br/>
					「getRootProps」を渡してドロップをさせる領域を指定し、<br/>
					「getInputProps」を渡してファイルのinput領域（非表示となる）を指定<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section4.code4}
							codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-2. Hooksを利用した場合
				</h3>
				<div className="p">
					① 以下のようにインポートし、「useDropzone」の機能を利用する<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code5}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 「useDropzone」で使用する機能を定義し、③の自前のコンポーネントで使用する<br/>
					また、Propsを使用する場合は定義して、「useDropzone」に渡す<br/>
					※今回は許容するファイルを設定している
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code6}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					③ 以下のように取得したファイルの処理を定義
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code7}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					④ 以下のように②で定義した機能を「3-1③」同様にコンポーネントに反映する
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section4.code8}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<div className="p">
					上記設定を参考にした上記サンプルのコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section4.code9}
							codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-3. Propsの種類
				</h3>
				<p className="p">
					以下のPropsが設定可能である
				</p>
				<Parts.TableForProps tableData={tableData} />
		</div>
	);
}

export default ReactDropzone;
