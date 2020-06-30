/** Page Componentインポート **/
// Topページ
import Top from '../view/pages/top';
// Page1
import Environment from '../view/pages/page1/s1Environment';
import EnvironmentM from '../view/pages/page1/s2EnvironmentManual';
import AboutEnv from '../view/pages/page1/s3AboutEnv';
// Page2
// Page3
import HowToCreateComponent from '../view/pages/page3/s1HowToCreateComponent';
import CreateRolls from '../view/pages/page3/s2CreateRolls';
import AboutState from '../view/pages/page3/s3AboutState';
import AboutProps from '../view/pages/page3/s4AboutProps';
// Page5
import ReactSyntaxHighlighter from '../view/pages/page5/s1ReactSyntaxHighlighter';
// Sample page
import Sample from '../sample/pageSample';

/** Page Component設定 **/
export default {
	// Topページ
	Top: {
		Name: "React Learning",
		Top: Top,
	},
	// 1. 環境構築ページ
	Page1: {
		Name: "1. 環境構築",
		Section1: {
			Name: "1-1. create-react-app",
			Environment: Environment,
		},
		Section2: {
			Name: "1-2. 手動で設定",
			EnvironmentM: EnvironmentM,
		},
		Section3: {
			Name: "1-3. Envの設定",
			AboutEnv: AboutEnv,
		},
	},
	// 2. ファイル構成
	Page2: {
		Name: "2. ファイル構成",
		Section1: {
			Name: "2-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "2-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 3. コンポーネント
	Page3: {
		Name: "3. コンポーネント",
		Section1: {
			Name: "3-1. 作成方法",
			HowToCreateComponent: HowToCreateComponent,
		},
		Section2: {
			Name: "3-2. 役割ごとに作成",
			CreateRolls: CreateRolls,
		},
		Section3: {
			Name: "3-3. Stateの使い方",
			AboutState: AboutState,
		},
		Section4: {
			Name: "3-4. Propsの使い方",
			AboutProps: AboutProps,
		},
	},
	// 4. ルーティング
	Page4: {
		Name: "4. ルーティング",
		Section1: {
			Name: "4-1. React Router",
			Sample: Sample,
		},
		Section2: {
			Name: "4-2. ファイルで設定",
			Sample: Sample,
		},
	},
	// 5. ライブラリ(プラグイン)
	Page5: {
		Name: "5. ライブラリ(プラグイン)",
		Section1: {
			Name: "5-1. React Syntax Highlighter",
			ReactSyntaxHighlighter: ReactSyntaxHighlighter,
		},
		Section2: {
			Name: "5-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 6. ---追加予定---
	Page6: {
		Name: "6. ---追加予定---",
		Section1: {
			Name: "6-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "6-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 7. ---追加予定---
	Page7: {
		Name: "7. ---追加予定---",
		Section1: {
			Name: "7-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "7-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 8. ---追加予定---
	Page8: {
		Name: "8. ---追加予定---",
		Section1: {
			Name: "8-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "8-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 9. ---追加予定---
	Page9: {
		Name: "9. ---追加予定---",
		Section1: {
			Name: "9-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "9-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 10. ---追加予定---
	Page10: {
		Name: "10. ---追加予定---",
		Section1: {
			Name: "10-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "10-2. ---追加予定---",
			Sample: Sample,
		},
	},
};
