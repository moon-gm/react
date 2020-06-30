import States from "./../config/states";

// 戻るボタン押下時処理
function backPage() {

	var getNow = sessionStorage.getItem('nowPage');
	var getBack1 = sessionStorage.getItem('back1Page');
	var getBack2 = sessionStorage.getItem('back2Page');
	var getBack3 = sessionStorage.getItem('back3Page');

	if (getNow !== this.state.page) {
		this.setState({page: getNow});

	} else if (getBack1 !== this.state.page) {
		this.setState({page: getBack1});
		sessionStorage.setItem('nowPage', getBack1);

	} else if (getBack2 !== this.state.page) {
		this.setState({page: getBack2});
		sessionStorage.setItem('back1Page', getBack2);

	} else if (getBack3 !== this.state.page) {
		this.setState({page: getBack3});
		sessionStorage.setItem('back2Page', getBack3);

	}
}

export default backPage;
