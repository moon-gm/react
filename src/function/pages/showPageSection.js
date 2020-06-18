import States from "./../../config/states";

// 子リストのページの表示処理
function showPageSection(section) {
	this.setState({page: section});
	this.setState({menu: States.menu.hide});
	console.log(this.state);
}

export default showPageSection;
