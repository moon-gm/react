import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeHighlighter = ({codeString, language, codeColor}) => {
  return (
	<div className="p code">
		<SyntaxHighlighter language={language} style={codeColor}>
			{codeString}
		</SyntaxHighlighter>
	</div>
  );
};
export default CodeHighlighter;
