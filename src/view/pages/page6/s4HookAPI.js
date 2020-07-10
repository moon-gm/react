import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';

const HookAPI = ({title, allData}) => {

	const lists = [
		{name: "useState"},
		{name: "useEffect"},
		{name: "useContext"},
		{name: "useReducer"},
		{name: "useCallback"},
		{name: "useMemo"},
		{name: "useRef"},
		{name: "useImperativeHandle"},
		{name: "useLayoutEffect"},
		{name: "useDebugValue"},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. フックAPIリスト
			</h2>
				<p className="p">
					以下はReact組み込みのフックのリストである
				</p>
				<div className="p">
					{
						lists.map(list => {
							return (
								<React.Fragment key={list.name}>
									・
									<a
										className="page-jump inline-block"
										href={`#${list.name}`}
									>
										{list.name}
									</a>
									<br/>
								</React.Fragment>
							);
						})
					}
				</div>

			<h2 className="h2">
				2. 各フック紹介
			</h2>
				<div className="spacer-for-header" id={lists[0].name}/>
				<h3 className="h3">
					◆ {lists[0].name}
				</h3>
				<p className="p">
					Stateの値と、それを更新するための関数を変数にセットしている<br/>
					初回のレンダー時に返される「state」は第1引数として渡された値 (initialState) と等しくなる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section4.code1}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					setState関数は「state」を更新するために使用し、新しい「state」の値を受け取るとコンポーネントが再レンダーされるようになっている
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section4.code2}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					後続の再レンダー時には、「useState」から返される1番目の値は常に、更新を適用した後の最新版の「state」になる
				</p>
				<p className="p">
					※関数型の更新
				</p>
				<p className="p">
					新しい「state」の値が前の値に基づいて計算される場合は、「setState」に関数を渡すことができる。
					この関数では前の「state」の値を受け取り、更新された新しい「state」値を返す。
					以下は、「setState」の両方の形式を用いたカウンタコンポーネント
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section4.code3}
					codeColor={codes.styles.tomorrow}
				/>
				<p className="p">
					”+” と ”-” のボタンは、更新後の値が更新前の値に基づいて計算されるため、関数形式を使っており、“Reset”ボタンは常にカウントを初期値に戻すので、通常の形式を使用。
					この更新用関数が現在の「state」と全く同じ値を返す場合は、後続する再レンダーは完全にスキップとなる。
				</p>
				<p className="p">
					現在値と同じ値で更新を行った場合、Reactは子のレンダーや副作用の実行を回避して処理を終了
				</p>

				<div className="spacer-for-header" id={lists[1].name}/>
				<h3 className="h3">
					◆ {lists[1].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[2].name}/>
				<h3 className="h3">
					◆ {lists[2].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[3].name}/>
				<h3 className="h3">
					◆ {lists[3].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[4].name}/>
				<h3 className="h3">
					◆ {lists[4].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[5].name}/>
				<h3 className="h3">
					◆ {lists[5].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[6].name}/>
				<h3 className="h3">
					◆ {lists[6].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[7].name}/>
				<h3 className="h3">
					◆ {lists[7].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[8].name}/>
				<h3 className="h3">
					◆ {lists[8].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<div className="spacer-for-header" id={lists[9].name}/>
				<h3 className="h3">
					◆ {lists[9].name}
				</h3>
				<p className="p">

				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page6.Section1.code1}
					codeColor={codes.styles.tomorrow}
				/>


		</div>
	);
}

export default HookAPI;
