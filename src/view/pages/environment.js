import React from 'react';
import screenShot from './../../images/environment_react-start.png'

const createEnvironment = ({comment}) => {
	return (
		<div className="page-layout">

			<h1 className="h1">
				1. create-react-appを使用
			</h1>

				<h2 className="h2">
					1. create-react-appをインストール
				</h2>
					<p className="p">
						<span className="code">
							$ npm install -g create-react-app
						</span>
						をターミナルに入力してインストール
					</p>
					<p className="p">
						<span className="code">
							$ create-react-app -v
						</span>
						でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>

				<h2 className="h2">
					2. プロジェクトを作成
				</h2>
					<p className="p">
						プロジェクトを作成するディレクトリに移動し、以下のコマンドを実行
					</p>
					<p className="p">
						<span className="code">
							$ create-react-app [作成するプロイジェクト名]
						</span>
						でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>
					<p className="p">
						※ 以下を入力した場合、create-react-appをローカルインストールせずにプロジェクト作成できる
					</p>
					<p className="p">
						<span className="code">
							$ npx create-react-app [作成するプロイジェクト名]
						</span>
					</p>

				<h2 className="h2">
					3. サーバを起動
				</h2>
					<p className="p">
						プロジェクトのディレクトリに移動し以下のコマンドを実行
					</p>
					<p className="p">
						<span className="code">
							$ npm start
						</span>
					</p>
					<p className="p">
						サーバを停止するときは、「Ctrl + C」を押す
					</p>

				<h2 className="h2">
					4. 画面表示確認
				</h2>
					<p className="p">
						「http://localhost:3000」にアクセスして以下の画面表示ができていれば成功
					</p>
					<div className="img-box">
						<img src={screenShot} alt="初期表示画面" />
					</div>

				<h2 className="h2">
					5. Sassを導入
				</h2>
					<p className="p">
						<span className="code">
							$ npm i -D node-sass
						</span>
					</p>
					<p className="p">
						上記コマンド入力のみで、Sassの使用が可能になる
					</p>

		</div>
	);
}

export default createEnvironment;
