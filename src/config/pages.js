/**
 * ページ設定情報を返す
 * @param funcs array
 * @name ページの名前
 * @func ページで使用するfunction
 * @state 表示に必要なstate
 * @children 子リストがある場合の設定
 */
function Pages(funcs) {
	return (
		[
			{
				"name": "React Learning",
				"func": funcs[0].Top,
				"state": {
					"page": 0,
				},
			},
			{
				"name": "1. 環境構築",
				"func": funcs[1].page1.s0,
				"state": {
					"page": 1,
				},
				"children": [
					{
						"name": "1. create-react-appを使用",
						"func": funcs[1].page1.s1,
						"state": {
							"page": "1sec1",
							"list": "show",
						},
					},
					{
						"name": "2. 手動で設定",
						"func": funcs[1].page1.s2,
						"state": {
							"page": "1sec2",
							"list": "show",
						},
					},
				],
			},
			{
				"name": "2. Stateの使い方",
				"func": funcs[2].page2,
				"state": {
					"page": 2,
				},
			},
		]
	);
}

export default Pages;
