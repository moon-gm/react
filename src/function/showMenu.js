// サイドエリアの表示処理
function showMenu() {
	if (this.state.menu === 'hide'){
		this.setState({menu: 'show'});
	} else {
		this.setState({menu: 'hide'});
	}
}

export default showMenu;
