import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const HookAPI = ({title, allData}) => {

	const lists = [
		{name: "useState", url: "usestate"},
		{name: "useEffect", url: "useeffect"},
		{name: "useContext", url: "usecontext"},
		{name: "useReducer", url: "usereducer"},
		{name: "useCallback", url: "usecallback"},
		{name: "useMemo", url: "usememo"},
		{name: "useRef", url: "useref"},
		{name: "useImperativeHandle", url: "useimperativehandle"},
		{name: "useLayoutEffect", url: "uselayouteffect"},
		{name: "useDebugValue", url: "usedebugvalue"},
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

				{/***** useState *****/}
				<div>
					<div className="spacer-for-header" id={lists[0].name}>
						以下に各フックごとに使い方などを紹介
					</div>
					<h3 className="h3">
						◆ {lists[0].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[0].url}`}
							linkText={`? 公式サイト（${lists[0].name}）`}
						/>
					</div>
					<p className="p">
						「useState」はStateを変更・管理するフックである<br/>
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
				</div>

				{/***** useEffect *****/}
				<div>
					<div className="spacer-for-header" id={lists[1].name}/>
					<h3 className="h3">
						◆ {lists[1].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[1].url}`}
							linkText={`? 公式サイト（${lists[1].name}）`}
						/>
					</div>
					<p className="p">
						「useEffect」はレンダー後に副作用的に関数を実行するフックである<br/>
						DOMの書き換え、データの購読、タイマー、ロギングなどの関数は副作用的に実行する必要があるため、このフックを利用する
					</p>
					<p className="p">
						デフォルトでは副作用関数はレンダーが終了した後に毎回動作するが、特定の値が変化した時のみ動作させるようにすることもできる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page6.Section4.code4}
						codeColor={codes.styles.tomorrow}
					/>
					<p className="p">
						※副作用のタイミング
					</p>
					<p className="p">
						クラスコンポーネントで使う「componentDidMount」や「componentDidUpdate」と異なり、useEffect に渡された関数はレイアウトと描画の後で遅延されたイベントとして実行される<br/>
						すべての副作用が遅延できるわけではなく、UIに関わるDOMの変更などは、次の描画が発生する前に同期的に発生する必要がある。<br/>
						そういった場合は、<a href={`#${lists[8].name}`}>「{lists[8].name}」</a>を利用する（「{lists[8].name}」は実行のタイミングが異なるのみで「{lists[1].name}」と処理内容は同じである）
					</p>
					<p className="p">
						※条件付きで副作用を実行
					</p>
					<p className="p">
						デフォルトの動作では、副作用関数はレンダーの完了時に毎回実行される。<br/>
						「useEffect」の第2引数として、この副作用が依存している値の配列を渡す。
						以下の場合は「props.source」が条件となり、値が変更された場合にのみ再作成されるようになる。
						空の配列[]を渡すと、副作用はマウント時には実行されるが、更新時にはされないようになる。
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page6.Section4.code5}
						codeColor={codes.styles.tomorrow}
					/>
				</div>

				{/***** useContext *****/}
				<div>
					<div className="spacer-for-header" id={lists[2].name}/>
					<h3 className="h3">
						◆ {lists[2].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[2].url}`}
							linkText={`? 公式サイト（${lists[2].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useReducer *****/}
				<div>
					<div className="spacer-for-header" id={lists[3].name}/>
					<h3 className="h3">
						◆ {lists[3].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[3].url}`}
							linkText={`? 公式サイト（${lists[3].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useCallback *****/}
				<div>
					<div className="spacer-for-header" id={lists[4].name}/>
					<h3 className="h3">
						◆ {lists[4].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[4].url}`}
							linkText={`? 公式サイト（${lists[4].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useMemo *****/}
				<div>
					<div className="spacer-for-header" id={lists[5].name}/>
					<h3 className="h3">
						◆ {lists[5].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[5].url}`}
							linkText={`? 公式サイト（${lists[5].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useRef *****/}
				<div>
					<div className="spacer-for-header" id={lists[6].name}/>
					<h3 className="h3">
						◆ {lists[6].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[6].url}`}
							linkText={`? 公式サイト（${lists[6].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useImperativeHandle *****/}
				<div>
					<div className="spacer-for-header" id={lists[7].name}/>
					<h3 className="h3">
						◆ {lists[7].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[8].url}`}
							linkText={`? 公式サイト（${lists[8].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useLayoutEffect *****/}
				<div>
					<div className="spacer-for-header" id={lists[8].name}/>
					<h3 className="h3">
						◆ {lists[8].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[8].url}`}
							linkText={`? 公式サイト（${lists[8].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

				{/***** useDebugValue *****/}
				<div>
					<div className="spacer-for-header" id={lists[9].name}/>
					<h3 className="h3">
						◆ {lists[9].name}
					</h3>
					<div className="p">
						<Parts.Link
							url={`${urls.ReactOfficial.HooksAPI}#${lists[9].url}`}
							linkText={`? 公式サイト（${lists[9].name}）`}
						/>
					</div>
					<p className="p">

					</p>
				</div>

		</div>
	);
}

export default HookAPI;
