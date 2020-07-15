
import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';
import Pages from './../../../config/pages';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ReactRouter = ({title}) => {

	const tableDataBrowserRouter = [
		{propsName: "basename", roll: "Github Pagesでは「ホスト名＋/リポジトリ名」のため、「process.env.PUBLIC_URL」で「/リポジトリ名」を設定",}
	];
	const tableDataRoute = [
		{propsName: "path", roll: "付与したい前方一致のパス名を指定",},
		{propsName: "exact path", roll: "付与したい完全一致のパス名を指定",},
		{propsName: "component", roll: "作成済のコンポーネントを指定。propsを渡したい場合は以下の「render」propsを使う",},
		{propsName: "render", roll: "この場で使用するコンポーネントを作成。「()=><Sample props={props} />」で作成済のコンポーネントにpropsを渡すこともできる",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-router-domとは
			</h2>
				<p className="p">
					URLにパスを付与してルーティングできるようにするライブラリ<br/>
					※現在、基本的にreact-router-domのみの使用でルーティングできる(react-routerライブラリもある)
				</p>
				<div className="p">
					リンクを押下するとパス名が変わり、以下にページを表示するのサンプル
				</div>
				<div className="p">
					<BrowserRouter basename={process.env.PUBLIC_URL}>
						<Link to="/Top">
							/Top
						</Link><br/>
						<Link to="/Page1/Section1">
							/Page1/Section1
						</Link><br/>
						<Link to="/Page1/Section2">
							/Page1/Section2
						</Link>
						<Switch>
							<Route path="/Top" render={() => <Pages.Top.Top title="React Learning"/>} />
							<Route path="/Page1/Section1" component={Pages.Page1.Section1.Environment} />
							<Route path="/Page1/Section2" component={Pages.Page1.Section2.EnvironmentM} />
						</Switch>
					</BrowserRouter>

				</div>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-router-dom --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-router-dom / react-router
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、それぞれコンポーネントとして使用できるようにする<br/>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section14.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のようにコンポーネントを使用する<br/>
					<p className="p">
						・「BrowerRouter」で囲った内部でルーティングを設定(basenameでホスト名以下につける固定パスを指定)<br/>
						・「Switch」で囲ったエリア内がルーティングで切替わるエリア<br/>
						・「Route」でルーティングの個別設定(pathでパスをcomponentで表示するコンポーネントを指定)<br/>
						・「Link」は押下時にアクセスするパスを設定(toでリンクするパスを指定)
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section14.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
				</div>
				<div className="p">
					上記設定のサンプルコード<br/>
					<Parts.CodeHighlighter
							language={codes.languages.jsx}
							codeString={codes.pages.Page5.Section14.code3}
							codeColor={codes.styles.tomorrow}
					/>
				</div>
				<h3 className="h3">
					3-2. Propsの種類
				</h3>
				<p className="p">
					○ BrowserRouter
				</p>
				<Parts.TableForProps tableData={tableDataBrowserRouter}/>
				<p className="p">
					○ Route
				</p>
				<Parts.TableForProps tableData={tableDataRoute}/>

		</div>
	);
}

export default ReactRouter;
