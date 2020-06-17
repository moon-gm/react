import States from "../../config/states";

// トップページの表示処理
function showPageTop() {
	this.setState({page: States.page.Top});
	this.setState({menu: States.menu.hide});
	console.log(this.state);
}

export default showPageTop;
