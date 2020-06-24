import React from 'react';

// 表示するコードを作成する
const CreateCode = ({createCode}) => {
	return (
		<p className="p">
			<code className="code">
				{
					createCode.contents.map(content => {

						if (content === void 0) {
							return (
								<br key={`code${createCode.contents.indexOf(content)}`}/>
							);
						} else {
							return (
								<React.Fragment key={`code${createCode.contents.indexOf(content)}`}>
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
