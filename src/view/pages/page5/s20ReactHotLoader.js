
import React from 'react';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const ReactHotLoader = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-hot-loaderとは
			</h2>
				<p className="p">
					ファイルを監視して変更があれば、Stateを保持したままブラウザのリロードをせずに画面を更新するライブラリ<br/>
					開発環境にて、ファイルの変更を即座に確認して作業の効率化ができる
				</p>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-hot-loader --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-hot-loader」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<p className="p">
					gulpやWebpack、BrowserSyncなどと合わせて使用する<br/>
					詳細は以下で確認<br/>
					<Parts.Link
						url={urls.ReactHotLoader}
						linkText="? React Hot Loader"
					/>
				</p>

		</div>
	);
}

export default ReactHotLoader;
