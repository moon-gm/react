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
			// Topページ
			{
				"name": "React Learning",
				"func": funcs[0].Top,
				"state": {
					"page": 0,
				},
			},
			// 1. 環境構築
			{
				"name": "1. 環境構築",
				"func": funcs[1].Page1.List1,
				"state": {
					"page": 1,
				},
				"children": [
					{
						"name": "1. create-react-appを使用",
						"func": funcs[1].Page1.S1,
						"state": {
							"page": "1sec1",
							"list": "show",
						},
					},
					{
						"name": "2. 手動で設定",
						"func": funcs[1].Page1.S2,
						"state": {
							"page": "1sec2",
							"list": "show",
						},
					},
				],
			},
			// 2. データ関連
			{
				"name": "2. データ関連",
				"func": funcs[2].Page2,
				"state": {
					"page": 2,
				},
			},
		]
	);
}

export default Pages;
