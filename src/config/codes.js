// react-syntax-highlighterのstyleをインポート
import { dark, coy, funky, okaidia, solarizedlight, tomorrow, twilight, prism, atomDark, base16AteliersulphurpoolLight, cb, darcula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, ghcolors, hopscotch, pojoaque, vs, xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

// ハイライトするコードの設定
export default {
	pages: {
		Top: null,
		Page1: {
			Section1: {
				code1: "\"homepage\": \".\"",
			},
			Section2: {
				code1: "<div id=\"root\"></div>",
				code2: "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n    <>\n        <p>Hellow World!</p>\n    </>,\n    document.getElementById('contents')\n);",
				code3: "module.exports= {\n    entry: './app.js',\n    output: {\n        path: './dist',\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: [\n            {\n                test: /.js$/,\n                exclude: /node_modules/,\n                loader: 'babel-loader'\n            }\n        ]\n    }\n}",
				code4: "<script src=\"./dist/bundle.js\"></script>",
				code5: "{\"presets\": [\"react\", \"es2015\"]}",
				code6: "\"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n    \"build\": \"webpack\",\n    \"start\": \"webpack-dev-server --hot --inline\"\n}",
			},
			Section3: {
				code1: "REACT_APP_NAME=\"React Learning\"",
				code2: "process.env.{KEY名}",
				code3: "process.env.REACT_APP_NAME",
			},
		},
		Page2: {
			Section1: {
				code1: "constructor(props) {\n    super(props);\n        this.state = {\n            x:0,\n    }\n}",
				code2: "{this.state.x === 0 ? \"Learn React\" : \"Try React\"}",
				code3: "func() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}",
				code4: "<button onClick={this.func.bind(this)}>Change State</button>",
				code5: "import React from 'react';\n\nclass App extends React.Component{\n\nconstructor(props) {\n    super(props);\n        this.state = {\n                x:0,\n    }\n}\n\nfunc() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}\n\nrender() {\n    return(\n        <header className=\"header>\n            <p>\n                {this.state.x === 0 ? \"Learn React\" : \"Try React\"}\n            </p>\n            <button onClick={this.func.bind(this)}>Change State</button>\n        </header>\n        );\n    }\n}\nexport default App;",
			},
			Section2: {
				code1: "import App from './component/App';",
				code2: "ReactDOM.render(\n    <React.StrictMode>\n        <Appcomment=\"React Application\"/>\n    </React.StrictMode>\n    document.getElementById('root')\n);",
				code3: "class Sample extends React.Component{\n    render() {\n        return(\n            <header className=\"header\">\n                <p>{this.props.comment}</p>\n            </header>\n        );\n    }\n}\nexport default Sample;",
				code4: "const Sample = ({comment}) =>{\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
				code5: "function Sample(comment) {\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
			},
		},
		Page3: {
			Section1: {
				code1: "import React from 'react'",
				code2: "import ReactDOM from 'react-dom'",
				code3: "import Styles from './style.module.css'",
				code4: "import Image from './image.png'",
			},
			Section2: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
				code5: "",
			},
		},
		Page4: {
			Section1: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
			},
			Section2: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
				code5: "",
			},
		},
		Page5: {
			Section1: {
				code1: "import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';",
				code2: "import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';",
				code3: "<SyntaxHighlighter language={language} style={dark}>\n	{codeString}\n</SyntaxHighlighter>",
				code4: "import React from 'react';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';\n\nconst CodeHighlighter = ({codeString, language}) => {\n  return (\n	<div className=\"p code\">\n		<SyntaxHighlighter language={language} style={dark}>\n			{codeString}\n		</SyntaxHighlighter>\n	</div>\n  );\n};\nexport default CodeHighlighter;\n",
			},
			Section2: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
				code5: "",
			},
		},
	},
	languages: {
		jsx: "jsx",
		javascript: "javascript",
		html: "html",
		css: "css",
		sass: "sass",
		json: "json",
	},
	styles: {
		"dark": dark,
		"coy": coy,
		"funky": funky,
		"okaidia": okaidia,
		"solarizedlight": solarizedlight,
		"tomorrow": tomorrow,
		"twilight": twilight,
		"prism": prism,
		"atomDark": atomDark,
		"base16AteliersulphurpoolLight": base16AteliersulphurpoolLight,
		"cb": cb,
		"darcula": darcula,
		"duotoneDark": duotoneDark,
		"duotoneEarth": duotoneEarth,
		"duotoneForest": duotoneForest,
		"duotoneLight": duotoneLight,
		"duotoneSea": duotoneSea,
		"duotoneSpace": duotoneSpace,
		"ghcolors": ghcolors,
		"hopscotch": hopscotch,
		"pojoaque": pojoaque,
		"vs": vs,
		"xonokai": xonokai,
	}
}
