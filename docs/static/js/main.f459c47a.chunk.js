(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[0],[,,function(e,a,t){e.exports={sideList:"aside_sideList__2yEUf",sideListText:"aside_sideListText__fFBFF",sideListChildren:"aside_sideListChildren__3ls7w",spin:"aside_spin__F_Lny",fade:"aside_fade__320D-"}},function(e,a,t){e.exports={App:"top_App__2JWmW",AppLogo:"top_AppLogo__3bQXj",fade:"top_fade__2pxjU",AppHeader:"top_AppHeader__2pCQJ",AppLink:"top_AppLink__2HUmX",mainTitle:"top_mainTitle__3PlIP",spin:"top_spin__1A4ZP"}},function(e,a,t){e.exports={headerList:"header_headerList__1MC1m",menuBtn:"header_menuBtn__YITUT",headerLogo:"header_headerLogo__1aaM2",headerTitle:"header_headerTitle__33vqG",animation:"header_animation__GinGF",spin:"header_spin__1gWW8",fade:"header_fade__1DNMg"}},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/environment_react-start.f1ad1539.png"},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(7),c=t.n(l),m=t(8),r=t(9),p=t(1),i=t(12),o=t(11),d=t(2),E=t.n(d);var u={page:{Top:0,Page1:{L1:1,S1:"1S1",S2:"1S2"},Page2:2},menu:{hide:"hide",show:"show"},list1:{name:"list1",hide:"hide",show:"show"},list2:{name:"list2",hide:"hide",show:"show"}},h=function(e){var a=e.pages,t=(e.states,{});return s.a.createElement("aside",{className:"aside"},s.a.createElement("ul",null,a.map((function(e){return console.log({AllPages:a}),null===e.children||void 0===e.children?void 0:s.a.createElement(s.a.Fragment,{key:"flag".concat(e.state.page)},s.a.createElement("li",{className:E.a.sideList,onClick:e.func,id:e.state.page,key:"key".concat(e.state.page)},s.a.createElement("span",{className:E.a.sideListText},e.name,console.log({WithCildren:e}))),e.children.map((function(a){console.log({SinglePage:e}),t={sideList:E.a.sideList,sideListChildren:E.a.sideListChildren,sideListText:E.a.sideListText,func:a.func,state:{page:a.state.page,list:a.state.list},name:a.name},console.log({listNeeds:t})})))}))))},g=t(5),N=t.n(g),b=function(){return s.a.createElement("div",{className:"page-layout"},s.a.createElement("h1",{className:"h1"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ah1\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"),s.a.createElement("p",{className:"p"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ap\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"),s.a.createElement("h2",{className:"h2"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ah2\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"),s.a.createElement("p",{className:"p"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ap\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"),s.a.createElement("h3",{className:"h3"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ah3\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"),s.a.createElement("p",{className:"p"},"\uff0a\uff0a\uff0a\uff0a\uff0a\uff0ap\uff0a\uff0a\uff0a\uff0a\uff0a\uff0a"))},_=t(10),f=t.n(_),v=function(e){var a=e.title;return s.a.createElement("div",{className:"page-layout"},s.a.createElement("h1",{className:"h1"},a),s.a.createElement("h2",{className:"h2"},"1. create-react-app\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm install -g create-react-app"),"\u3092\u30bf\u30fc\u30df\u30ca\u30eb\u306b\u5165\u529b\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ create-react-app -v"),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306b\u30b3\u30f3\u30bd\u30fc\u30eb\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u308c\u3070OK\uff09"),s.a.createElement("h2",{className:"h2"},"2. \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"),s.a.createElement("p",{className:"p"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ create-react-app [\u4f5c\u6210\u3059\u308b\u30d7\u30ed\u30a4\u30b8\u30a7\u30af\u30c8\u540d]"),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306b\u30b3\u30f3\u30bd\u30fc\u30eb\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u308c\u3070OK\uff09"),s.a.createElement("p",{className:"p"},"\u203b \u4ee5\u4e0b\u3092\u5165\u529b\u3057\u305f\u5834\u5408\u3001create-react-app\u3092\u30ed\u30fc\u30ab\u30eb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u3067\u304d\u308b"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npx create-react-app [\u4f5c\u6210\u3059\u308b\u30d7\u30ed\u30a4\u30b8\u30a7\u30af\u30c8\u540d]")),s.a.createElement("h2",{className:"h2"},"3. \u30b5\u30fc\u30d0\u3092\u8d77\u52d5"),s.a.createElement("p",{className:"p"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm start")),s.a.createElement("p",{className:"p"},"\u30b5\u30fc\u30d0\u3092\u505c\u6b62\u3059\u308b\u3068\u304d\u306f\u3001\u300cCtrl + C\u300d\u3092\u62bc\u3059"),s.a.createElement("h2",{className:"h2"},"4. \u753b\u9762\u8868\u793a\u78ba\u8a8d"),s.a.createElement("p",{className:"p"},"\u300chttp://localhost:3000\u300d\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u4ee5\u4e0b\u306e\u753b\u9762\u8868\u793a\u304c\u3067\u304d\u3066\u3044\u308c\u3070\u6210\u529f"),s.a.createElement("div",{className:"img-box"},s.a.createElement("img",{src:f.a,alt:"\u521d\u671f\u8868\u793a\u753b\u9762"})),s.a.createElement("h2",{className:"h2"},"5. Sass\u3092\u5c0e\u5165"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm i -D node-sass")),s.a.createElement("p",{className:"p"},"\u4e0a\u8a18\u30b3\u30de\u30f3\u30c9\u5165\u529b\u306e\u307f\u3067\u3001Sass\u306e\u4f7f\u7528\u304c\u53ef\u80fd\u306b\u306a\u308b"))},S=function(e){var a=e.title;return s.a.createElement("div",{className:"page-layout"},s.a.createElement("h1",{className:"h1"},a),s.a.createElement("h2",{className:"h2"},"1.\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fb\u30d5\u30a1\u30a4\u30eb \u4f5c\u6210"),s.a.createElement("p",{className:"p"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7528\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001package.json\u3092\u4f5c\u6210"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm init -y")),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3082\u4f5c\u6210\u3057\u3066\u304a\u304f"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ touch index.html"),s.a.createElement("br",null),s.a.createElement("span",{className:"command"},"$ touch app.js")),s.a.createElement("p",{className:"p"},"index.html\u306fbody\u306e\u4e2d\u306b\u4ee5\u4e0b\u306e\u30bf\u30b0\u3092\u8a18\u8f09\uff08\u3053\u306e\u30bf\u30b0\u306e\u4e2d\u306b\u30ec\u30f3\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u304f\uff09"),s.a.createElement("p",{className:"p"},s.a.createElement("code",null,'<div id="root"></div>')),s.a.createElement("p",{className:"p"},"app.js\u306f\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8a18\u5165"),s.a.createElement("p",{className:"p"},s.a.createElement("code",{className:"code-block"},"import React from 'react';",s.a.createElement("br",null),"import ReactDOM from 'react-dom';",s.a.createElement("br",null),s.a.createElement("br",null),"ReactDOM.render(",s.a.createElement("br",null),"<>",s.a.createElement("br",null),"<p>Hellow World!</p>",s.a.createElement("br",null),"</>,",s.a.createElement("br",null),"document.getElementById('contents')",s.a.createElement("br",null),");")),s.a.createElement("h2",{className:"h2"},"2.react\u3068react-dom\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),s.a.createElement("p",{className:"p"},"React\u3092\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b"),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u914d\u4e0b\u306bnode_modules\u30d5\u30a9\u30eb\u30c0\u304c\u4f5c\u6210\u3055\u308c\u3001package.json\u306edependencies\u306breact\u3068react-dom\u304c\u8a18\u8f09\u3055\u308c\u308b"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm install --save react react-dom")),s.a.createElement("h2",{className:"h2"},"3.Webpack\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),s.a.createElement("p",{className:"p"},"\u30d5\u30a1\u30a4\u30eb\u306e\u30d3\u30eb\u30c9\u95a2\u9023\u306e\u8a2d\u5b9a\u3092\u3059\u308b"),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08\u4e0a\u624b\u304f\u52d5\u4f5c\u3057\u306a\u3044\u5834\u5408\u304c\u3042\u308b\u305f\u3081\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff09"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm install -g webpack-cli")),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff06package.json\u306b\u8a18\u8f09"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm install --save-dev webpack"),s.a.createElement("br",null),s.a.createElement("span",{className:"command"},"$ npm install --save-dev webpack-cli")),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067Webpack\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ touch webpack.config.js")),s.a.createElement("p",{className:"p"},"\u4f5c\u6210\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8ffd\u52a0"),s.a.createElement("p",{className:"p"},s.a.createElement("code",{className:"code-block"},"module.exports = ","{",s.a.createElement("br",null),"entry: './app.js',",s.a.createElement("br",null),"output: ","{",s.a.createElement("br",null),"path: './dist',",s.a.createElement("br",null),"filename: 'bundle.js'",s.a.createElement("br",null),"}, module: ","{",s.a.createElement("br",null),"rules: [",s.a.createElement("br",null),"{",s.a.createElement("br",null),"test: /\\.js$/,",s.a.createElement("br",null),"exclude: /node_modules/,",s.a.createElement("br",null),"loader: 'babel-loader'",s.a.createElement("br",null),"}",s.a.createElement("br",null),"]",s.a.createElement("br",null),"}",s.a.createElement("br",null),"}")),s.a.createElement("p",{className:"p"},"index.html\u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0"),s.a.createElement("p",{className:"p"},s.a.createElement("code",null,'<script src="./dist/bundle.js"><\/script>')),s.a.createElement("h2",{className:"h2"},"4.Babel\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),s.a.createElement("p",{className:"p"},"JSX(xml\u98a8\u306eJavascript)\u3067\u66f8\u304b\u308c\u305f\u3082\u306e\u3092JS\u306b\u5909\u63db\u3059\u308b"),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067Babel\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff06package.json\u306b\u8a18\u8f09"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react")),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067.babelrc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u3067\u304d\u305f\u30d5\u30a1\u30a4\u30eb\u306b",s.a.createElement("code",null,'{"presets": ["react", "es2015]"}'),"\u3092\u8ffd\u52a0"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ touch .babelrc")),s.a.createElement("h2",{className:"h2"},"5.\u30d6\u30e9\u30a6\u30b6\u306e\u30ea\u30ed\u30fc\u30c9\u5b9f\u88c5"),s.a.createElement("p",{className:"p"},"\u6bce\u56de\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u305b\u305a\u306b\u3001\u30b3\u30fc\u30c9\u3092\u66f4\u65b0\u3059\u308b\u5ea6\u306b\u30d6\u30e9\u30a6\u30b6\u306e\u30aa\u30fc\u30c8\u30ea\u30ed\u30fc\u30c9\u3092\u3059\u308b\u8a2d\u5b9a"),s.a.createElement("p",{className:"p"},"package.json\u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0"),s.a.createElement("p",{className:"p"},s.a.createElement("code",{className:"code-block"},'"scripts": ',"{",s.a.createElement("br",null),'"test": "echo \\"Error: no test specified\\" ',"&&",' exit 1",',s.a.createElement("br",null),'"build": "webpack",',s.a.createElement("br",null),'"start": "webpack-dev-server --hot --inline"',s.a.createElement("br",null),"}")),s.a.createElement("h2",{className:"h2"},"6.\u30b5\u30fc\u30d0\u8d77\u52d5"),s.a.createElement("p",{className:"p"},"\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u3001\u300chttp://localhost:8080\xa0\u300d\u306b\u30a2\u30af\u30bb\u30b9\u3067\u753b\u9762\u304c\u8868\u793a(app.js\u306bReact\u8a18\u8ff0\u3057\u305f\u5185\u5bb9\u304c\u8868\u793a)"),s.a.createElement("p",{className:"p"},"\u30fbwebpack\u306e\u5b9f\u884c"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm run build")),s.a.createElement("p",{className:"p"},"\u30fb\u81ea\u52d5\u30ea\u30ed\u30fc\u30c9"),s.a.createElement("p",{className:"p"},s.a.createElement("span",{className:"command"},"$ npm start")))},k=t(3),L=t.n(k),P=function(e){var a=e.name;return s.a.createElement("div",{className:L.a.App},s.a.createElement("div",{className:L.a.AppHeader},s.a.createElement("p",{className:L.a.mainTitle},a),s.a.createElement("img",{src:N.a,className:L.a.AppLogo,alt:"logo"}),s.a.createElement("a",{className:L.a.AppLink,href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"> Go to Support")))},j=function(e){var a=e.pages,t=e.states,n=e.route;return"page"===n?s.a.createElement(s.a.Fragment,null,t.page===u.page.Top&&s.a.createElement(P,{name:a[0].name}),t.page===u.page.Page1.S1&&s.a.createElement(v,{title:a[1].children[0].name}),t.page===u.page.Page1.S2&&s.a.createElement(S,{title:a[1].children[1].name}),t.page===u.page.Page2&&s.a.createElement(b,null)):"header"===n?s.a.createElement(s.a.Fragment,null,t.page===u.page.Top&&a[0].name,t.page===u.page.Page1.S1&&a[1].children[0].name,t.page===u.page.Page1.S2&&a[1].children[1].name,t.page===u.page.Page2&&a[2].name):void 0},w=t(4),x=t.n(w),T=function(e){var a=e.states,t=e.pages,n=e.func;return s.a.createElement("header",{className:"header"},s.a.createElement("ul",{className:x.a.headerList},s.a.createElement("li",{className:x.a.headerLogo},s.a.createElement("img",{src:N.a,alt:"logo",className:x.a.animation})),s.a.createElement("li",{className:x.a.headerTitle},s.a.createElement(j,{pages:t,states:a,route:"header"})),s.a.createElement("li",{className:x.a.menuBtn,onClick:n},"\u2261")))};var $=function(e,a){return[{name:"React Learning",func:e[0].Top,state:{page:a.page.Top}},{name:"1. \u74b0\u5883\u69cb\u7bc9",func:e[1].Page1.L1,state:{page:a.page.Page1.L1},children:[{name:"1-1. create-react-app\u3092\u4f7f\u7528",func:e[1].Page1.S1,state:{page:a.page.Page1.S1,list:a.list1.name}},{name:"1-2. \u624b\u52d5\u3067\u8a2d\u5b9a",func:e[1].Page1.S2,state:{page:a.page.Page1.S2,list:a.list1.name}}]},{name:"2. \u30c7\u30fc\u30bf\u95a2\u9023",func:e[2].Page2,state:{page:a.page.Page2}}]};var y={Menu:function(){this.state.menu===u.menu.hide?this.setState({menu:u.menu.show}):this.setState({menu:u.menu.hide})},PageTop:function(){this.setState({page:u.page.Top}),this.setState({menu:u.menu.hide}),console.log(this.state)},PageSection:function(e){this.setState({page:e}),this.setState({menu:u.menu.hide}),console.log(this.state)},Page1:function(){this.state.list1===u.list1.hide?this.setState({list1:u.list1.show}):this.setState({list1:u.list1.hide}),console.log(this.state)}},A=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={page:u.page.Top,menu:u.menu.hide,list1:u.list1.hide,list2:u.list2.hide},n.funcs=[{Top:y.PageTop.bind(Object(p.a)(n)),Menu:y.Menu.bind(Object(p.a)(n))},{Page1:{L1:y.Page1.bind(Object(p.a)(n)),S1:y.PageSection.bind(Object(p.a)(n),u.page.Page1.S1),S2:y.PageSection.bind(Object(p.a)(n),u.page.Page1.S2)}},{Page2:n.page2.bind(Object(p.a)(n))}],n.pages=$(n.funcs,u),n}return Object(r.a)(t,[{key:"page2",value:function(){this.setState({page:2}),this.setState({menu:"hide"}),console.log(this.state)}},{key:"render",value:function(){return s.a.createElement("div",{className:"flex-box"},this.state.menu===u.menu.hide,this.state.menu===u.menu.show&&s.a.createElement(h,{pages:this.pages,states:this.state}),s.a.createElement("div",{className:"contents"},s.a.createElement(T,{pages:this.pages,states:this.state,func:this.funcs[0].Menu}),s.a.createElement("main",{className:"main"},s.a.createElement(j,{pages:this.pages,states:this.state,route:"page"}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(18),t(19);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.f459c47a.chunk.js.map