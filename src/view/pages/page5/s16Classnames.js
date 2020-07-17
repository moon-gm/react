
import React from 'react';

// 通常の複数クラス設定
import classNames from 'classnames';
// Objectでクラスに別名をつけて設定
import classBind from 'classnames/bind';
// 重複するクラス名は無視する設定
import classDedupe from 'classnames/dedupe';

import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const Classnames = ({title}) => {

	var styles = {
		a: 'h2',
		b: 'h3',
		c: 'p',
	}

	var classNameBind = classBind.bind(styles);

	return (
		<div className="page-layout">

			<h2 className={classNames('h2')}>
				1. classnamesとは
			</h2>
				<p className={classDedupe('p')}>
					classNameにクラスを複数付与できるようにするライブラリ <br/>
					クラス名をObjectにして値にtrue/falseを入れると表示非表示の設定ができる
				</p>

			<h2 className={classNameBind('a')}>
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install classnames --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「classnames」が追加
				</p>


			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下からどれか使用したいパターンをインポートし、「classNames」をfunctionとして使用できるようにする
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section16.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② 「className」propsに以下を設定すると、=>の右側のように認識する
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section16.code2}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					※ classnames/dedupeをインポートして使用した場合、重複するクラス名は一番右側の記述で上書きとなる
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section16.code3}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					※ classnames/bindをインポートして使用した場合、関数内でObjectのKey名で指定できる
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section16.code4}
						codeColor={codes.styles.tomorrow}
					/>
				</div>

		</div>
	);
}

export default Classnames;
