import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const ChildrenProps = ({allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. 「children」propsとは
			</h2>
				<p className="p">
					propsとして渡せる値の一つで、親要素で子要素をタグで囲った時に、子要素（element）を親要素にpropsとして渡せるのが「children」propsである
				</p>

			<h2 className="h2">
				2. ファイルの関係性の定義
			</h2>
				<p className="p">
					親要素・・・layout.js<br/>
					子要素・・・page.js
				</p>

			<h2 className="h2">
				3. 親要素(layout.js)での記述
			</h2>
				<p className="p">
					子要素を配置したい箇所に「children」propsを記述<br/>
					※以下は関数コンポーネントで作成の場合<br/>
					※クラスコンポーネントの場合、「this.props.children」となる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section5.code1}
					codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				4. 子要素(page.js)での使い方
			</h2>
				<p className="p">
					親要素(layout.js)をインポートし、Layoutタグを作成して、タグ内に子要素として表示したい内容を記述
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section5.code2}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					これで、layout.jsのchildrenに上記で記載した内容が渡されてmainタグ内に表示される
				</p>

			<h1 className="h1">
				※ childrenにpropsを渡したい場合
			</h1>
				<p className="p">
					参照サイト：
					<Parts.Link
						url={urls.ChildrenProps}
						linkText="? childrenにpropsを追加する方法"
					/>
				</p>

				<h2 className="h2">
					1. 親要素(layout.js)での記述
				</h2>
				<p className="p">
					方針としては、子要素に渡すPropsをObjectで定義しておき、それを子要素再生成処理と共に渡す
				</p>
				<p className="p">
					React.cloneElementで子要素を再生成し、第一引数には子要素自体(children)を、第二引数には渡したいPropsを設定
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page3.Section5.code3}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					この「newChildren」を配置したい箇所に記述すれば、Propsを持った状態で子要素が出来上がる
				</p>

				<h2 className="h2">
					2. 子要素(page.js)での使い方
				</h2>
				<p className="p">
					通常通りpropsを渡した場合と同様にpropsを使用できる<br/>
					※今回の上記の例の場合、コンポーネント内で「{"{sample}"}」とするのみで良い
				</p>

		</div>
	);
}

export default ChildrenProps;
