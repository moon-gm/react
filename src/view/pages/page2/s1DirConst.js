import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const DirConst = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. ディレクトリツリー
			</h2>
				<p className="p">
					create-react-appを用い、React.jsをインストールした場合のプロジェクト構成
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.unset}
					codeString={codes.pages.Page2.Section1.code1}
					codeColor={codes.styles.dark}
				/>

			<h2 className="h2">
				2. build
			</h2>
				<p className="p">
					以下のコマンドを実行した際に、作成されプロダクション用ファイルが格納されるディレクトリ
				</p>
				<p className="p">
					<span className="command">
						$ npm run-script build / $ yarn build
					</span>
				</p>

			<h2 className="h2">
				3. public
			</h2>
				<p className="p">
					以下のコマンドを実行し、開発環境にて使用するファイルが格納されたディレクトリ
				</p>
				<p className="p">
					<span className="command">
						$ npm start
					</span>
				</p>

			<h2 className="h2">
				4. src
			</h2>
				<p className="p">
					主にこのディレクトリでソースファイルを作成・編集していく<br/>
					次セクション<span className="page-jump" onClick={allData[2].children[1].func}>[ {allData[2].children[1].name} ]</span>でファイル構成を確認
				</p>

			<h2 className="h2">
				5. node_modules
			</h2>
				<p className="p">
					以下のコマンドを実行することで、package.jsonに基づいて作成されるディレクトリ<br/>
					※プロジェクト作成時には自動で作成される
				</p>
				<p className="p">
					<span className="command">
						$ npm install
					</span>
				</p>
		</div>
	);
}

export default DirConst;
