/**
 * ページ設定情報を返す
 * @param funcs array
 * @param states object
 * @name ページの名前
 * @func ページを表示するfunction
 * @state ページのstate
 * @children 子リストがある場合の設定
 */
function AllData(funcs, states) {
	return (
		[
			// Topページ
			{
				"name": "React Learning",
				"func": funcs[0].Top,
				"state": {
					"page": states.page.Top,
				},
			},
			// 1. 環境構築
			{
				"name": "1. 環境構築",
				"func": funcs[1].Page1.L1,
				"state": {
					"page": states.page.Page1.L1,
				},
				"children": [
					{
						"name": "1-1. create-react-app",
						"func": funcs[1].Page1.S1,
						"state": {
							"page": states.page.Page1.S1,
							"list": states.list1.name,
						},
					},
					{
						"name": "1-2. 手動で設定",
						"func": funcs[1].Page1.S2,
						"state": {
							"page": states.page.Page1.S2,
							"list": states.list1.name,
						},
					},
				],
			},
			// 2. データ関連
			{
				"name": "2. データ関連",
				"func": funcs[2].Page2.L2,
				"state": {
					"page": states.page.Page2.L2,
				},
				"children": [
					{
						"name": "2-1. Stateの使い方",
						"func": funcs[2].Page2.S1,
						"state": {
							"page": states.page.Page2.S1,
							"list": states.list2.name,
						},
					},
					{
						"name": "2-2. Propsの使い方",
						"func": funcs[2].Page2.S2,
						"state": {
							"page": states.page.Page2.S2,
							"list": states.list2.name,
						},
					},
					{
						"name": "2-3. Envの使い方",
						"func": funcs[2].Page2.S3,
						"state": {
							"page": states.page.Page2.S3,
							"list": states.list2.name,
						},
					},
				],
			},
		]
	);
}

export default AllData;
