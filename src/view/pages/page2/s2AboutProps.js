import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const AboutProps = ({title}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. ファイルの関係性の確認
			</h2>
				<p className="p">
				親コンポーネント・・・index.js<br/>
				子コンポーネント・・・App.js
				</p>

			<h2 className="h2">
				2. 親コンポーネント(index.js)での記述
			</h2>
				<p className="p">
					子コンポーネント(App.js)をインポート
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code1}
						codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					子コンポーネントを使用し、タグの属性のように記載した「comment」をpropsとして渡している
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code2}
						codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				3. 子コンポーネント(App.js)での使い方
			</h2>
				<p className="p">
					コンポーネントの作り方によって使い方が少し異なるので、以下で３パターンあげる
				</p>

				<h3 className="h3">
					3-1. classで作成の場合
				</h3>
				<p className="p">
					React.Componentを継承しているのでそのまま「this.props.comment」で使用できる
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code3}
						codeColor={codes.styles.tomorrow}
				/>

				<h3 className="h3">
					3-2. constで定義した場合
				</h3>
				<p className="p">
					アロー関数で親コンポーネントから受け取った「comment」を以下のように渡せば「comment」として使用できる
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code4}
						codeColor={codes.styles.tomorrow}
				/>

				<h3 className="h3">
					3-3. functionで作成した場合
				</h3>
				<p className="p">
					functionの場合、引数に入れてあげると以下のようにそのまま使える
				</p>
				<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code5}
						codeColor={codes.styles.tomorrow}
				/>

		</div>
	);
}

export default AboutProps;
