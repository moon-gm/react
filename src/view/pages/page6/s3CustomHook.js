import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const CustomHook = ({title, allData}) => {
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. カスタムフックの作成方法
			</h2>
				<p className="p">
					カスタムフックとは、独自にフックを作成することで、コンポーネントからロジックを抽出して再利用可能な関数を作ることが可能になる<br/>
					コンポーネント内で定義したfunctionを外部から使用できるようにすることで、カスタムフックと呼べる機能が実現する。
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section3.code1}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					 このfunction名は必ず「use」から始まるように命名。
					 以下のように、インポートすることでReactのフック同様に使用可能となる。
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section3.code2}
					codeColor={codes.styles.tomorrow}
				/>

			<h2 className="h2">
				1. カスタムフックのルール
			</h2>
				<h3 className="h3">
					◆ コードは元のコードと同等か
				</h3>
				<p className="p">
					全く同じように動作
				</p>
				<h3 className="h3">
					◆ 名前は「use」から始める
				</h3>
				<p className="p">
					「eslint-plugin-react-hooks」でフックのルールを強制することができるが、
					その管理外とならないように「use」から始めるべきである。<br/>
					※useからはじめなくても機能はする
				</p>
				<h3 className="h3">
					◆ 同じフックを使うコンポーネントは「state」を共有するのか
				</h3>
				<p className="p">
					カスタムフックを使う場所ごとで、内部の「state」や副作用は完全に分離
				</p>
				<h3 className="h3">
					◆ フックは独立している
				</h3>
				<p className="p">
					「useState」や「useEffect」のReactフックを含め、ひとつのコンポーネント内で複数回呼ぶことができ、それらは完全に独立する
				</p>

		</div>
	);
}

export default CustomHook;
