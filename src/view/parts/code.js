import React from 'react';

// 表示するコードを作成する
const CreateCode = ({createCode}) => {
	return (
		<p className="p">
			<code className="code">
				{
					createCode.contents.map(content => {

						if (content === null) {
							return (
								<br key={createCode.contents.indexOf(content)}/>
							);
						} else {
							return (
								<React.Fragment  key={createCode.contents.indexOf(content)}>
									{
										content.map(item => {
											return (
												<span
													key={item.id}
													className={`${item.color} ${item.space && "space"} ${item.indent}`}
												>
													{item.text}
												</span>
											);
										})
									}
									<br/>
								</React.Fragment>
							);
						}
					})
				}
			</code>
		</p>
	)
}

export default CreateCode;
