import React from 'react';

const Aside = ({lists, func}) => {
	return (
		<aside className="aside">
			<ul>
				<li
					className="App-link"
					onClick={func[0]}
					id="0"
				>
					{lists[0]}
				</li>
				<li
					className="App-link"
					onClick={func[1]}
					id="1"
				>
					{lists[1]}
				</li>
				<li
					className="App-link"
					onClick={func[2]}
					id="2"
				>
					{lists[2]}
				</li>
			</ul>
		</aside>
	);
}

export default Aside;
