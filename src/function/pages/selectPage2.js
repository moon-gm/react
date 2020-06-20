import States from "./../../config/states";

// 項目２ページの表示処理
function selectPage2() {
	if (this.state.list2 === States.list2.hide) {
		this.setState({list2: States.list2.show});
	} else {
		this.setState({list2: States.list2.hide});
	}
	console.log(this.state);
}

export default selectPage2;
