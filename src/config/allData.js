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
				"Component": Pages.Top.Top,
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
					"list": States.list.list1,
				},
				"children": [
					// 1-1. create-react-app
					{
						"name": Pages.Page1.Section1.Name,
						"Component": Pages.Page1.Section1.Environment,
						"func": funcs[1].Page1.S1,
						"state": {
							"page": States.page.Page1.S1,
							"list": States.list.list1,
						},
					},
					// 1-2. 手動で設定
					{
						"name": Pages.Page1.Section2.Name,
						"Component": Pages.Page1.Section2.EnvironmentM,
						"func": funcs[1].Page1.S2,
						"state": {
							"page": States.page.Page1.S2,
							"list": States.list.list1,
						},
					},
					// 1-3. Envの設定
					{
						"name": Pages.Page1.Section3.Name,
						"Component": Pages.Page1.Section3.AboutEnv,
						"func": funcs[1].Page1.S3,
						"state": {
							"page": States.page.Page1.S3,
							"list": States.list.list1,
						},
					},
				],
			},
			// 2. ファイル構成
			{
				"name": Pages.Page2.Name,
				"func": funcs[2].Page2.L2,
				"state": {
					"page": States.page.Page2.L2,
					"list": States.list.list2,
				},
				"children": [
					// 2-1. ---追加予定---
					{
						"name": Pages.Page2.Section1.Name,
						"Component": Pages.Page2.Section1.Sample,
						"func": funcs[2].Page2.S1,
						"state": {
							"page": States.page.Page2.S1,
							"list": States.list.list2,
						},
					},
					// 2-2. ---追加予定---
					{
						"name": Pages.Page2.Section2.Name,
						"Component": Pages.Page2.Section2.Sample,
						"func": funcs[2].Page2.S2,
						"state": {
							"page": States.page.Page2.S2,
							"list": States.list.list2,
						},
					},
				],
			},
			// 3. コンポーネント
			{
				"name": Pages.Page3.Name,
				"func": funcs[3].Page3.L3,
				"state": {
					"page": States.page.Page3.L3,
					"list": States.list.list3,
				},
				"children": [
					// 3-1. 作成方法
					{
						"name": Pages.Page3.Section1.Name,
						"Component": Pages.Page3.Section1.HowToCreateComponent,
						"func": funcs[3].Page3.S1,
						"state": {
							"page": States.page.Page3.S1,
							"list": States.list.list3,
						},
					},
					// 3-2. 役割ごとに作成
					{
						"name": Pages.Page3.Section2.Name,
						"Component": Pages.Page3.Section2.CreateRolls,
						"func": funcs[3].Page3.S2,
						"state": {
							"page": States.page.Page3.S2,
							"list": States.list.list3,
						},
					},
					// 3-3. Stateの使い方
					{
						"name": Pages.Page3.Section3.Name,
						"Component": Pages.Page3.Section3.AboutState,
						"func": funcs[3].Page3.S3,
						"state": {
							"page": States.page.Page3.S3,
							"list": States.list.list3,
						},
					},
					// 3-4. Propsの使い方
					{
						"name": Pages.Page3.Section4.Name,
						"Component": Pages.Page3.Section4.AboutProps,
						"func": funcs[3].Page3.S4,
						"state": {
							"page": States.page.Page3.S4,
							"list": States.list.list3,
						},
					},
				],
			},
			// 4. ルーティング
			{
				"name": Pages.Page4.Name,
				"func": funcs[4].Page4.L4,
				"state": {
					"page": States.page.Page4.L4,
					"list": States.list.list4,
				},
				"children": [
					// 4-1. React Router
					{
						"name": Pages.Page4.Section1.Name,
						"Component": Pages.Page4.Section1.Sample,
						"func": funcs[4].Page4.S1,
						"state": {
							"page": States.page.Page4.S1,
							"list": States.list.list4,
						},
					},
					// 4-2. ファイルで設定
					{
						"name": Pages.Page4.Section2.Name,
						"Component": Pages.Page4.Section2.Sample,
						"func": funcs[4].Page4.S2,
						"state": {
							"page": States.page.Page4.S2,
							"list": States.list.list4,
						},
					},
				],
			},
			// 5. ライブラリ(プラグイン)
			{
				"name": Pages.Page5.Name,
				"func": funcs[5].Page5.L5,
				"state": {
					"page": States.page.Page5.L5,
					"list": States.list.list5,
				},
				"children": [
					// 5-1. React Syntax Highlighter
					{
						"name": Pages.Page5.Section1.Name,
						"Component": Pages.Page5.Section1.ReactSyntaxHighlighter,
						"func": funcs[5].Page5.S1,
						"state": {
							"page": States.page.Page5.S1,
							"list": States.list.list5,
						},
					},
					// 5-2. ---追加予定---
					{
						"name": Pages.Page5.Section2.Name,
						"Component": Pages.Page5.Section2.Sample,
						"func": funcs[5].Page5.S2,
						"state": {
							"page": States.page.Page5.S2,
							"list": States.list.list5,
						},
					},
				],
			},
			// 6. ---追加予定---
			{
				"name": Pages.Page6.Name,
				"func": funcs[6].Page6.L6,
				"state": {
					"page": States.page.Page6.L6,
					"list": States.list.list6,
				},
				"children": [
					// 6-1. ---追加予定---
					{
						"name": Pages.Page6.Section1.Name,
						"Component": Pages.Page6.Section1.Sample,
						"func": funcs[6].Page6.S1,
						"state": {
							"page": States.page.Page6.S1,
							"list": States.list.list6,
						},
					},
					// 6-2. ---追加予定---
					{
						"name": Pages.Page6.Section2.Name,
						"Component": Pages.Page6.Section2.Sample,
						"func": funcs[6].Page6.S2,
						"state": {
							"page": States.page.Page6.S2,
							"list": States.list.list6,
						},
					},
				],
			},
			// 7. ---追加予定---
			{
				"name": Pages.Page7.Name,
				"func": funcs[7].Page7.L7,
				"state": {
					"page": States.page.Page7.L7,
					"list": States.list.list7,
				},
				"children": [
					// 7-1. ---追加予定---
					{
						"name": Pages.Page7.Section1.Name,
						"Component": Pages.Page7.Section1.Sample,
						"func": funcs[7].Page7.S1,
						"state": {
							"page": States.page.Page7.S1,
							"list": States.list.list7,
						},
					},
					// 7-2. ---追加予定---
					{
						"name": Pages.Page7.Section2.Name,
						"Component": Pages.Page7.Section2.Sample,
						"func": funcs[7].Page7.S2,
						"state": {
							"page": States.page.Page7.S2,
							"list": States.list.list7,
						},
					},
				],
			},
			// 8. ---追加予定---
			{
				"name": Pages.Page8.Name,
				"func": funcs[8].Page8.L8,
				"state": {
					"page": States.page.Page8.L8,
					"list": States.list.list8,
				},
				"children": [
					// 8-1. ---追加予定---
					{
						"name": Pages.Page8.Section1.Name,
						"Component": Pages.Page8.Section1.Sample,
						"func": funcs[8].Page8.S1,
						"state": {
							"page": States.page.Page8.S1,
							"list": States.list.list8,
						},
					},
					// 8-2. ---追加予定---
					{
						"name": Pages.Page8.Section2.Name,
						"Component": Pages.Page8.Section2.Sample,
						"func": funcs[8].Page8.S2,
						"state": {
							"page": States.page.Page8.S2,
							"list": States.list.list8,
						},
					},
				],
			},
			// 9. ---追加予定---
			{
				"name": Pages.Page9.Name,
				"func": funcs[9].Page9.L9,
				"state": {
					"page": States.page.Page9.L9,
					"list": States.list.list9,
				},
				"children": [
					// 9-1. ---追加予定---
					{
						"name": Pages.Page9.Section1.Name,
						"Component": Pages.Page9.Section1.Sample,
						"func": funcs[9].Page9.S1,
						"state": {
							"page": States.page.Page9.S1,
							"list": States.list.list9,
						},
					},
					// 9-2. ---追加予定---
					{
						"name": Pages.Page9.Section2.Name,
						"Component": Pages.Page9.Section2.Sample,
						"func": funcs[9].Page9.S2,
						"state": {
							"page": States.page.Page9.S2,
							"list": States.list.list9,
						},
					},
				],
			},
			// 10. ---追加予定---
			{
				"name": Pages.Page10.Name,
				"func": funcs[10].Page10.L10,
				"state": {
					"page": States.page.Page10.L10,
					"list": States.list.list10,
				},
				"children": [
					// 10-1. ---追加予定---
					{
						"name": Pages.Page10.Section1.Name,
						"Component": Pages.Page10.Section1.Sample,
						"func": funcs[10].Page10.S1,
						"state": {
							"page": States.page.Page10.S1,
							"list": States.list.list10,
						},
					},
					// 10-2. ---追加予定---
					{
						"name": Pages.Page10.Section2.Name,
						"Component": Pages.Page10.Section2.Sample,
						"func": funcs[10].Page10.S2,
						"state": {
							"page": States.page.Page10.S2,
							"list": States.list.list10,
						},
					},
				],
			},
		]
	);
}

export default AllData;
