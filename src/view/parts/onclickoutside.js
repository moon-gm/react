import React from 'react'
import onClickOutside from 'react-onclickoutside'

class Outside extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			sampleClick: "Hello World!!"
		}
	}

	handleClickOutside() {
		if (this.state.sampleClick === "Hello World!!") {
			this.setState({
			  sampleClick: "Good bye!!",
			});
		} else {
			this.setState({
				sampleClick: "Hello World!!",
			});
		}
	}

	render() {
		let style = {
			background: "white",
			padding: "10px",
			border: "2px solid black",
			textAlign: "center",
			color: "black",
			width: "50%",
			minWidth: "300px",
		}

		return (
			<>
				<div className="p" style={style}>
					このボタン外をクリックすると以下のメッセージが変わります
				</div>
				<div className="p" style={style}>
					{this.state.sampleClick}
				</div>
			</>
		);
	}
}
export default onClickOutside(Outside)
