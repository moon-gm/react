import Top from '../view/pages/top';
import Environment from '../view/pages/environment';
import EnvironmentM from '../view/pages/environmentManual';
import AboutState from '../view/pages/aboutState';
import AboutProps from '../view/pages/aboutProps';
import AboutEnv from '../view/pages/aboutEnv';
import Sample from '../sample/pageSample';

// Page Component設定
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
	},
	// 2. データ関連
	Page2: {
		Name: "2. データ関連",
		Section1: {
			Name: "2-1. Stateの使い方",
			AboutState: AboutState,
		},
		Section2: {
			Name: "2-2. Propsの使い方",
			AboutProps: AboutProps,
		},
		Section3: {
			Name: "2-3. Envの使い方",
			AboutEnv: AboutEnv,
		},
	},
	// 3. ---追加予定---
	Page3: {
		Name: "3. ---追加予定---",
		Section1: {
			Name: "3-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "3-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 4. ---追加予定---
	Page4: {
		Name: "4. ---追加予定---",
		Section1: {
			Name: "4-1. ---追加予定---",
			Sample: Sample,
		},
		Section2: {
			Name: "4-2. ---追加予定---",
			Sample: Sample,
		},
	},
	// 5. ---追加予定---
	Page5: {
		Name: "5. ---追加予定---",
		Section1: {
			Name: "5-1. ---追加予定---",
			Sample: Sample,
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
