// 必要データのインポート
import States from './states';
import Pages from './pages';

/**
 * ページ設定情報を返す
 * @param funcs array
 * @name ページの名前
 * @func ページを表示するfunction
 * @state ページのstate
 * @children 子リストがある場合の設定
 */
function AllData(funcs) {
	return (
		[
			// Topページ
			{
				"name": Pages.Top.Name,
				"func": funcs[0].Top,
				"state": {
					"page": States.page.Top,
				},
			},
			// 1. 環境構築
			{
				"name": Pages.Page1.Name,
				"func": funcs[1].Page1.L1,
				"state": {
					"page": States.page.Page1.L1,
				},
				"children": [
					// 1-1. create-react-app
					{
						"name": Pages.Page1.Section1.Name,
						"func": funcs[1].Page1.S1,
						"state": {
							"page": States.page.Page1.S1,
							"list": States.list1.name,
						},
					},
					// 1-2. 手動で設定
					{
						"name": Pages.Page1.Section2.Name,
						"func": funcs[1].Page1.S2,
						"state": {
							"page": States.page.Page1.S2,
							"list": States.list1.name,
						},
					},
				],
			},
			// 2. データ関連
			{
				"name": Pages.Page2.Name,
				"func": funcs[2].Page2.L2,
				"state": {
					"page": States.page.Page2.L2,
				},
				"children": [
					// 2-1. Stateの使い方
					{
						"name": Pages.Page2.Section1.Name,
						"func": funcs[2].Page2.S1,
						"state": {
							"page": States.page.Page2.S1,
							"list": States.list2.name,
						},
					},
					// 2-2. Propsの使い方
					{
						"name": Pages.Page2.Section2.Name,
						"func": funcs[2].Page2.S2,
						"state": {
							"page": States.page.Page2.S2,
							"list": States.list2.name,
						},
					},
					// 2-3. Envの使い方
					{
						"name": Pages.Page2.Section3.Name,
						"func": funcs[2].Page2.S3,
						"state": {
							"page": States.page.Page2.S3,
							"list": States.list2.name,
						},
					},
				],
			},
		]
	);
}

export default AllData;
