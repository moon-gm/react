import React from 'react';

const LibaryList = ({title, allData}) => {
	return (
		<div className="page-layout">

			<p className="p">
				よく使いそうなライブラリを項目ごとに一覧化していく<br/>
				各ライブラリの詳細は、青字のリンクまたはメニューから確認できる
			</p>

			<h2 className="h2">
				1. 項目１
			</h2>
				<p className="p">

				</p>

			<h2 className="h2">
				2. 項目２
			</h2>
				<p className="p">

				</p>

			<h2 className="h2">
				3. 項目３
			</h2>
				<p className="p">

				</p>

		</div>
	);
}

export default LibaryList;
