import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const UseLibrary = ({title, allData}) => {
	return (
		<div className="page-layout">

			<p className="p">
				このセクションはSPA(Single Page Application)ではなく、ページごとにURLを付与して実装する場合のルーティングである<br/>
				※ライブラリやフレームワークを利用して実装する
			</p>

			<h2 className="h2">
				1. React Routerを使用
			</h2>
				<p className="p">
					セクション<span className="page-jump" onClick={allData[5].children[13].func}>[ {allData[5].children[13].name} ]</span>で解説のため割愛
				</p>

			<h2 className="h2">
				2. Gatsby.jsにマウント
			</h2>
				<p className="p">
					ReactのフレームワークGatsby.jsを利用してURLのルーティングを行う<br/>
					Gatsby.jsではページコンポーネントとして作成したファイル名がパス名としてURLに自動で付与される
				</p>
				<p className="p">
					「プロジェクト名/src/pages」以下に作成されたファイルを元にページが作成されていく<br/>
					Topページとなるコンポーネントはindex.jsとなっている
				</p>
				<p className="p">
					<Parts.Link
						url={urls.Gatsby}
						linkText="? Gatsby.jsとは"
					/>
					<br/>
					<Parts.Link
						url={urls.GatsbyOfficial}
						linkText="? Gatsby.js公式サイト"
					/>
				</p>

			<h2 className="h2">
				3. Next.jsにマウント
			</h2>
				<p className="p">
					ReactのフレームワークNext.jsを利用してURLのルーティングを行う<br/>
					Next.jsではページコンポーネントとして作成したファイル名がパス名としてURLに自動で付与される
				</p>
				<p className="p">
					「プロジェクト名/pages」以下に作成されたファイルを元にページが作成されていく<br/>
					Topページとなるコンポーネントはindex.jsとなっている
				</p>
				<p className="p">
					<Parts.Link
						url={urls.Next}
						linkText="? Next.jsとは"
					/>
					<br/>
					<Parts.Link
						url={urls.NextOfficial}
						linkText="? Next.js公式サイト"
					/>
				</p>

		</div>
	);
}

export default UseLibrary;
