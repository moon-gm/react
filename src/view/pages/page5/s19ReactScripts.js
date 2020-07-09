
import React from 'react';

const ReactScripts = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-scriptsとは
			</h2>
				<p className="p">
					create react appをビルドして使用する際に実行するスクリプトライブラリ<br/>
					create-react-appコマンドでプロジェクトを作成した場合、自動でインストールされている
				</p>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-scripts --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-scripts」が追加
				</p>

			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コマンドを実行
				</h3>
				<p className="p">
					以下のコマンドを実行で、デプロイ用のソースをビルドできる<br/>
					create-react-appの場合、buildフォルダが作成され、格納される（.gitignoreとなっている）
				</p>
				<p className="p">
					<span className="command">
						$ npm run-script build
					</span>
				</p>

		</div>
	);
}

export default ReactScripts;
