import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';
import Styles from './../../../sass/parts/swipeableViews.module.scss';
import SwipeableViews from 'react-swipeable-views';

const ReactSwipeableViews = ({title}) => {

	const tableData = [
		{propsName: "enableMouseEvents", roll: "マウス操作でスワイプできるようになる",},
		{propsName: "action", roll: "コンポーネントがマウントされた時点で実行する関数を指定",},
		{propsName: "animateTransitions", roll: "切替時のアニメーションの設定。デフォルトは「true」",},
		{propsName: "index", roll: "画面表示時に表示させるスライドを設定",},
		{propsName: "resistance", roll: "スワイプの終わりで跳ね返りのあるアニメーションを追加する",},
		{propsName: "threshold", roll: "スワイプの動作幅を設定",},
		{propsName: "onChangeIndex", roll: "スライドが変化した時に実行する関数を指定",},
		{propsName: "onSwitching", roll: "スライドを動かしている間中実行する関数を指定",},
		{propsName: "springConfig", roll: "アニメーションの詳細設定。{duration: '0.3s', easeFunction: '...', delay: '0s'}がデフォルト",},
		{propsName: "children", roll: "子要素を指定していない場合、このpropsで指定できる",},
		{propsName: "disabled", roll: "非活性の設定",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. react-swipeable-viewsとは
			</h2>
				<p className="p">
					囲った要素をスワイプ可能にするコンポーネント<br/>
					設定によって、縦スワイプや、スワイプ時の処理なども細かく追加できるようになっている
				</p>
				<p className="p">
					以下を左にスワイプすると内容が切替わるサンプル
				</p>
				<div className={`${Styles.box} p`}>
					<SwipeableViews
						enableMouseEvents
						action={()=> sessionStorage.setItem("action", 1)}
						index={3}
						animateTransitions={true}
						// hysteresis={1}
						resistance
						threshold={5}
						onChangeIndex={()=> sessionStorage.setItem("onChangeIndex", (sessionStorage.getItem("onChangeIndex")+1))}
						onSwitching={()=> sessionStorage.setItem("onSwitching", sessionStorage.getItem("onSwitching")+1)}
						// springConfig={{tension: 300, friction: 30}}
					>
						<div className={`${Styles.red}`}>
							◀︎ Red Area
						</div>
						<div className={`${Styles.yellow}`}>
							◀︎ Yellow Area ▶︎
						</div>
						<div className={`${Styles.green}`}>
							◀︎ Green Area ▶︎
						</div>
						<div className={`${Styles.blue}`}>
							◀︎ Blue Area ▶︎
						</div>
						<div className={`${Styles.purple}`}>
							Purple Area ▶︎
						</div>
					</SwipeableViews>
				</div>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install react-swipeable-views --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「react-swipeable-views」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートし、「SwipeableViews」をコンポーネントとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section8.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 以下のように、SwipeableViewsコンポーネントの中にスワイプさせたい要素を設定
					<p className="p">
						※Propsについては下の項目で解説<br/>
						※今回、各種指定しているfunctionは実行タイミングを確認する為だけに指定している
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section8.code2}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
				<h3 className="h3">
					3-2. Propsの種類
				</h3>
				<Parts.TableForProps tableData={tableData}/>
				<p className="p">
					全てのPropsを知りたい場合は以下の公式へ<br/>
					オフィシャルHP：
					<Parts.Link
						url={urls.ReactSwipeableViews}
						linkText="? React Swipeable Views公式サイト"
					/>
				</p>

		</div>
	);
}

export default ReactSwipeableViews;
