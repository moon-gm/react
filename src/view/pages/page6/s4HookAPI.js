import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const HookAPI = ({title, allData}) => {

	// 各項目のコンテンツを設定
	const UseState = (
		<>
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
		</>
	);
	const UseEffect = (
		<>
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
				そういった場合は、<a href="#useLayoutEffect">「useLayoutEffect」</a>を利用する（「useLayoutEffect」は実行のタイミングが異なるのみで「useEffect」と処理内容は同じである）
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
		</>
	);
	const UseContext = (
		<>
			<p className="p">
				「useContext」は「React.createContext」で定義したコンテクストの戻り値を元に、そのコンテクストの現在値を返すフックである<br/>
				コンテクストの現在値は、DOMツリー内でこのフックを呼んだコンポーネントの直近にある{"<MyContext.Provider>"}のvalueの値によって決定される。<br/>
				直近の{"<MyContext.Provider>"}が更新された場合、このフックはその「MyContext」プロバイダに渡された最新のvalueの値を使って毎回再レンダーを発生させる。
			</p>
			<p className="p">
				※「useContext」に渡す引数は、「MyContext.Provider」などではなく、コンテクストオブジェクト自体（MyContext）である
			</p>
			<Parts.CodeHighlighter
				language={codes.languages.jsx}
				codeString={codes.pages.Page6.Section4.code6}
				codeColor={codes.styles.tomorrow}
			/>
			<p className="p">
				Context.Providerと組み合わせて使用する方法
			</p>
			<p className="p">
				①ThemeContextでコンテクストを定義<br/>
				②その{"<ThemeContext.Provider>"}でコンテクストの値を引き継ぐコンポーネントをWrapする<br/>
				③使用したいコンポーネントで「useContext(ThemeContext)」を定義することで現在値のコンテクストを使用できる
			</p>
			<Parts.CodeHighlighter
				language={codes.languages.jsx}
				codeString={codes.pages.Page6.Section4.code7}
				codeColor={codes.styles.tomorrow}
			/>
		</>
	);
	const UseReducer = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseCallback= (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseMemo = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseRef = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseImperativeHandle = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseLayoutEffect = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);
	const UseDebugValue = (
		<>
			<p className="p">
				基本APIの変種や、限られた場合での使用となるため、詳細は公式サイトにて確認
			</p>
		</>
	);

	// 項目定義
	const lists = [
		{name: "useState", contents: UseState, spaceMessage: "以下に各フックごとに使い方などを紹介"},
		{name: "useEffect", contents: UseEffect},
		{name: "useContext", contents: UseContext, url: urls.ReactOfficial.Context, linkText: "? コンテクストとは"},
		{name: "useReducer", contents: UseReducer},
		{name: "useCallback", contents: UseCallback},
		{name: "useMemo", contents: UseMemo},
		{name: "useRef", contents: UseRef},
		{name: "useImperativeHandle", contents: UseImperativeHandle},
		{name: "useLayoutEffect", contents: UseLayoutEffect},
		{name: "useDebugValue", contents: UseDebugValue},
	];

	// 項目をページに適用
	return (
		<div className="page-layout">

			<h2 className="h2">
				1. フックAPIリスト
			</h2>
				<p className="p">
					以下はReact組み込みのフックのリストである
				</p>
				{/***** ジャンプリスト作成 *****/}
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
				{/***** コンテンツ作成 *****/}
				{
					lists.map(item => {
						return (
							<React.Fragment key={item.name}>
								{/* ヘッダー固定分のスペーサー */}
									<div className="spacer-for-header" id={item.name}>
										{item.spaceMessage && item.spaceMessage}
									</div>
								{/* タイトル */}
									<h3 className="h3">
										◆ {item.name}
									</h3>
								{/* リンク */}
									<div className="p">
										<Parts.Link
											url={`${urls.ReactOfficial.HooksAPI}#${item.name.toLowerCase()}`}
											linkText={`? 公式サイト（${item.name}）`}
										/>
										{ // リンクが追加で必要な場合
											item.url && (
												<>
													<br/>
													<Parts.Link
														url={item.url}
														linkText={item.linkText}
													/>
												</>
											)
										}
									</div>
								{/* コンテンツ */}
									{item.contents && item.contents}
							</React.Fragment>
						);
					})
				}
		</div>
	);
}
export default HookAPI;
