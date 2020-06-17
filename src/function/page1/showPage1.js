// トップページの表示処理
function showPage1() {
	if (this.state.list1 === "hide") {
		this.setState({list1: 'show'});
	} else {
		this.setState({list1: 'hide'});
	}
	console.log(this.state);
}

export default showPage1;
