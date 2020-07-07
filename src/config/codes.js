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
				code1: "<div id=\"contents\"></div>",
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
				code1: "Project\n    - build\n    - public\n        - index.html\n        - manifest.json\n    - src\n        - App.js\n        - App.css\n        - index.js\n        - index.css\n        - serviceWorker.js\n    - node_modules\n    - package.json",
			},
			Section2: {
				code1: "import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n        <p>\n          Edit <code>src/App.js</code> and save to reload.\n        </p>\n        <a\n          className=\"App-link\"\n          href=\"https://reactjs.org\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          Learn React\n        </a>\n      </header>\n    </div>\n  );\n}\n\nexport default App;",
				code2: "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './sass/index.scss';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();",
			},
		},
		Page3: {
			Section1: {
				code1: "import React from 'react'",
				code2: "import ReactDOM from 'react-dom'",
				code3: "import Styles from './style.module.css'",
				code4: "import Image from './image.png'",
				code5: "import React from 'react';\nimport Image from './images/sample.png';\nimport Styles from './style.module.css'\n\nconst Sample = ({user}) => {\n  return (\n	<>\n		<p className={Styles.hello}>\n            Hello {user}!\n        </p>\n        <img src={Image} alt=\"sample\" />\n	</>\n  );\n};\nexport default Sample;",
			},
			Section2: {
				code1: "import React from 'react';\n\nconst Header = () => {\n  return (\n	<header className=\"header\">\n		<div className=\"header-title\">\n            ヘッダーエリア\n        </div>\n	</header>\n  );\n};\nexport default Header;",
				code2: "import React from 'react';\nimport PageRouter from './../routes/pageRouter';\n\nconst MainContents = ({state}) => {\n  return (\n	<main className=\"main\">\n		<div className=\"main-title\">\n            メインコンテンツーエリア\n            <PageRouter state={state} />\n        </div>\n	</main>\n  );\n};\nexport default MainContents;",
				code3: "import React from 'react';\n\nconst Footer = () => {\n  return (\n	<footer className=\"footer\">\n		<div className=\"footer-title\">\n            フッターエリア\n        </div>\n	</footer>\n  );\n};\nexport default Footer;",
				code4: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n  return (\n	<>\n        {state.page === \"1\" && <Page1 />}\n        {state.page === \"2\" && <Page2 />}\n    </>\n  );\n};\nexport default PageRouter;",
				code5: "import Header from './parts/header';\nimport MainContents from './parts/mainContents';\nimport Footer from './parts/footer';",
				code6: "<>\n    <Header />\n    <MainContents state={this.state}/>\n    <Footer />\n</>",
				code7: "import ReactDOM from 'react-dom';\n...(省略)...\n\nReactDOM.render(\n    <React.StrictMode>\n        <Layout />\n    </React.StrictMode>,\n    document.getElementById('root')\n);",
				code8: "<div id=\"root\"></div>",
				code9: "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Header from './parts/header';\nimport MainContents from './parts/mainContents';\nimport Footer from './parts/footer';\n\nclass Layout extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            page: \"1\"\n        }\n    }\n\n    render () {\n        return (\n            <>\n                <Header />\n                <MainContents state={this.state}/>\n                <Footer />\n            </>\n        );\n    }\n}\n\nReactDOM.render(\n    <React.StrictMode>\n        <Layout />\n    </React.StrictMode>,\n    document.getElementById('root')\n);",
			},
			Section3: {
				code1: "constructor(props) {\n    super(props);\n        this.state = {\n            x:0,\n    }\n}",
				code2: "{this.state.x === 0 ? \"Learn React\" : \"Try React\"}",
				code3: "func() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}",
				code4: "<button onClick={this.func.bind(this)}>Change State</button>",
				code5: "import React from 'react';\n\nclass App extends React.Component{\n\nconstructor(props) {\n    super(props);\n        this.state = {\n                x:0,\n    }\n}\n\nfunc() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}\n\nrender() {\n    return(\n        <header className=\"header>\n            <p>\n                {this.state.x === 0 ? \"Learn React\" : \"Try React\"}\n            </p>\n            <button onClick={this.func.bind(this)}>Change State</button>\n        </header>\n        );\n    }\n}\nexport default App;",
			},
			Section4: {
				code1: "import App from './component/App';",
				code2: "ReactDOM.render(\n    <React.StrictMode>\n        <Appcomment=\"React Application\"/>\n    </React.StrictMode>\n    document.getElementById('root')\n);",
				code3: "class Sample extends React.Component{\n    render() {\n        return(\n            <header className=\"header\">\n                <p>{this.props.comment}</p>\n            </header>\n        );\n    }\n}\nexport default Sample;",
				code4: "const Sample = ({comment}) =>{\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
				code5: "function Sample(comment) {\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
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
				code1: "import React from 'react';\n\nconst Page1 = ({title}) => {\n  return (\n	<div className=\"pages\">\n		<div className=\"pages-header\">\n			{title}\n		</div>\n		<div className=\"pages-contents\">\n			…メインコンテンツを表示…\n		</div>\n	</div>\n  );\n};\nexport default Page1;\n",
				code2: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n  return (\n	<>\n        {state.page === \"1\" && <Page1 />}\n        {state.page === \"2\" && <Page2 />}\n    </>\n  );\n};\nexport default PageRouter;\n",
				code3: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n\n	const Pages = [\n		{\n			Component: Page1,\n			State: \"1\"\n		},\n		{\n			Component: Page2,\n			State: \"2\"\n		}\n	];\n\n  return (\n	<>\n		{Pages.map(Page => {\n            return (\n                <React.Fragment key={Page.State}>\n			        {state.page === Page.State && <Page.Component />}\n                </React.Fragment>\n            );\n		})}\n    </>\n  );\n};\n\nexport default PageRouter;",
			},
		},
		Page5: {
			Section2: {
				code1: "import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';",
				code2: "import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';",
				code3: "<SyntaxHighlighter language={language} style={dark}>\n	{codeString}\n</SyntaxHighlighter>",
				code4: "import React from 'react';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';\n\nconst CodeHighlighter = ({codeString, language}) => {\n  return (\n	<div className=\"p code\">\n		<SyntaxHighlighter language={language} style={dark}>\n			{codeString}\n		</SyntaxHighlighter>\n	</div>\n  );\n};\nexport default CodeHighlighter;\n",
			},
			Section3: {
				code1: "import Select from 'react-select';",
				code2: "const options = [\n  { value: 'sample1', label: 'サンプル1' },\n  { value: 'sample2', label: 'サンプル2' },\n  { value: 'sample3', label: 'サンプル3' },\n  { value: 'sample4', label: 'サンプル4' },\n];",
				code3: " <Select options={options} />",
				code4: "import React from 'react';\nimport Select from 'react-select';\n\nconst options = [\n  { value: 'sample1', label: 'サンプル1' },\n  { value: 'sample2', label: 'サンプル2' },\n  { value: 'sample3', label: 'サンプル3' },\n  { value: 'sample4', label: 'サンプル4' },\n];\n\nconst Sample = () => {\n  return (\n    <Select options={options} />\n  );\n}\n\nexport default Sample;",
				code5: "",
			},
			Section4: {
				code1: "import Dropzone from 'react-dropzone';",
				code2: "onDrop = (acceptedFiles) => {\n    console.log(acceptedFiles);\n  }",
				code3: "<Dropzone onDrop={this.onDrop}>\n    {({getRootProps, getInputProps}) => (\n        <div {...getRootProps()}>\n            <input {...getInputProps()} />\n            [ クリックしてファイルを選択 ]\n        </div>\n    )}\n</Dropzone>",
				code4: "import React, { Component } from 'react';\nimport Dropzone from 'react-dropzone'\n\nclass Sample extends Component {\n\n    onDrop = (acceptedFiles) => {\n        console.log(acceptedFiles);\n    }\n\n    render() {\n        return (\n            <Dropzone onDrop={this.onDrop}>\n                {({getRootProps, getInputProps}) => (\n                    <div {...getRootProps()}>\n                        <input {...getInputProps()} />\n                        [ クリックしてファイルを選択 ]\n                    </div>\n                )}\n            </Dropzone>\n        );\n    }\n}\n\nexport default Sample;",
				code5: "import { useDropzone } from 'react-dropzone'",
				code6: "// Propsに渡す値を定義\nconst accept = \"image/png, image/jpeg, image/bmp, image/gif\"\n// Dropzoneの使用するhooksを定義し、Propsは上記定義の「accept」を使用\nconst {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({accept})",
				code7: "// ドロップされたファイルに対する処理\nconst files = acceptedFiles.map(file => (\n    <React.Fragment key={file.name}>\n        <p>\n            ■ ファイル : {file.name}\n        </p>\n        <p>\n            name : {file.path}\n        </p>\n        <p>\n            size : {file.size}\n        </p>\n        <p>\n            type : {file.type}\n        </p>\n        {console.log(file)}\n    </React.Fragment>\n));",
				code8: "<div {...getRootProps()}>\n    <input {...getInputProps()} />\n    ...省略...\n    { isDragActive && !isDragReject && (...省略...)}\n    ...省略...\n</div>",
				code9: "import React from 'react'\nimport { useDropzone } from 'react-dropzone'\n\nfunction Dropzone() {\n\n	// Propsに渡す値を定義\n    const accept = \"image/png, image/jpeg, image/bmp, image/gif\";\n    \n	// Dropzoneの使用するhooksを定義し、Propsは上記定義の「accept」を使用\n	const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({accept});\n\n	// ドロップされたファイルに対する処理\n	const files = acceptedFiles.map(file => (\n		<React.Fragment key={file.name}>\n			<p>\n				■ ファイル : {file.name}\n			</p>\n			<p>\n				name : {file.path}\n			</p>\n			<p>\n				size : {file.size}\n			</p>\n			<p>\n				type : {file.type}\n			</p>\n			{console.log(file)}\n		</React.Fragment>\n	));\n\n  return (\n	<>\n        <div {...getRootProps()}>\n            <input {...getInputProps()} />\n            { // 初期の表示\n                !isDragActive &&\n                    (\n                        <div>\n                            <p>\n                                [ ここにファイルをドロップする ]\n                            </p>\n                            <p>\n                                もしくは\n                            </p>\n                            <p>\n                                [ クリックしてファイルを選択 ]\n                            </p>\n                        </div>\n                    )\n            }\n            { // 許容ファイルのドラッグ時\n                isDragActive && !isDragReject &&\n                    (\n                        <div>\n                            <p>\n                                [ ここにファイルをドロップします ]\n                            </p>\n                        </div>\n                    )\n            }\n            { // 不許可ファイルのドラッグ時\n                isDragReject &&\n                    (\n                        <div>\n                            <p>\n                                [ ファイルタイプが不正なものです ]\n                            </p>\n                        </div>\n                    )\n            }\n        </div>\n        <div>\n            <p>\n                [ ここにファイル名が表示される ]\n            </p>\n            {files}\n        </div>\n	</>\n  )\n}\nexport default Dropzone",
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
		unset: "unset",
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
