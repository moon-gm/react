import States from "./../../config/states";

// 項目１ページの表示処理
function selectPage1() {
	if (this.state.list1 === States.list1.hide) {
		this.setState({list1: States.list1.show});
	} else {
		this.setState({list1: States.list1.hide});
	}
	console.log(this.state);
}

export default selectPage1;
