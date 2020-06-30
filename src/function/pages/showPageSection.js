import States from "./../../config/states";

// 子リストのページの表示処理
function showPageSection(section) {
	// sessionStorageに保存されている値を取得
	var getNow = sessionStorage.getItem('nowPage');
	var getBack1 = sessionStorage.getItem('back1Page');
	var getBack2 = sessionStorage.getItem('back2Page');

	// sessionStorageに保存さされている値を書き換え
	sessionStorage.setItem('back1Page', getNow);
	sessionStorage.setItem('back2Page', getBack1);
	sessionStorage.setItem('back3Page', getBack2);
	sessionStorage.setItem('nowPage', this.state.page);

	this.setState({page: section});
	this.setState({menu: States.menu.hide});
}

export default showPageSection;
