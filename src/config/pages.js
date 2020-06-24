import Top from '../view/pages/top';
import Environment from '../view/pages/environment';
import EnvironmentM from '../view/pages/environmentManual';
import AboutState from '../view/pages/aboutState';
import AboutProps from '../view/pages/aboutProps';
import AboutEnv from '../view/pages/aboutEnv';

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
};
