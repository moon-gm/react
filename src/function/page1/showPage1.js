// トップページの表示処理
function showPage1() {
	if (this.state.list === "hide") {
		this.setState({list: 'show'});
	} else {
		this.setState({list: 'hide'});
	}
	console.log(this.state);
}

export default showPage1;
