import React from 'react';
import codes from '../../config/codes';
import Parts from '../../config/parts';

const aboutEnv = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. envファイルの作成
			</h2>
				<p className="p">
					環境に合わせてルートディレクトリに以下のようなファイル作成する
				</p>
				<p className="p">
					.env.development・・・ローカル開発環境<br/>
					.env.production・・・本番環境
				</p>
				<p className="p">
					※git管理している場合、.gitignoreに入れておく方が良い
				</p>

			<h2 className="h2">
				2. KEYの設定ルール
			</h2>
				<p className="p">
					作成したファイルに記載するKEYは必ず「REACT_APP_」を頭につけること
				</p>
				<p className="p">
					Ex.)
					<Parts.Code createCode={codes.Page2.Section3.code1} />
				</p>

			<h2 className="h2">
				3. 呼び出し方
			</h2>
				<p className="p">
					以下のような記述で呼び出せる
				</p>
				<Parts.Code createCode={codes.Page2.Section3.code2} />
				<p className="p">
					Ex.)
					<Parts.Code createCode={codes.Page2.Section3.code3} />
				</p>
				<p className="p">
					上記で「React Learning」を取得できる
				</p>

		</div>
	);
}

export default aboutEnv;
