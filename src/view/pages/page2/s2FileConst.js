import React from 'react';
import codes from './../../../config/codes';
import urls from './../../../config/outerUrls';
import Parts from './../../../config/parts';

const FileConst = ({title, allData}) => {
	return (
		<div className="page-layout">
			<h2 className="h2">
				1. ディレクトリツリー
			</h2>
				{/* Page2のSection1から流用 */}
				<Parts.CodeHighlighter
					language={codes.languages.unset}
					codeString={codes.pages.Page2.Section1.code1}
					codeColor={codes.styles.dark}
				/>

			<h2 className="h2">
				2. srcファイル確認
			</h2>

				<h3 className="h3">
					App.js
				</h3>
				<p className="p">
					パーツとして利用できるサンプルのコンポーネントファイル<br/>
					最初はフォルダ分けされていないので、ファイルが多数増えてきたらコンポーネントの役割ごとにディレクトリを作成するとわかりやすい運用ができる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page2.Section2.code1}
					codeColor={codes.styles.tomorrow}
				/>

				<h3 className="h3">
					App.css
				</h3>
				<p className="p">
					App.jsで読み込まれているCSSファイル<br/>
					CSSを読み込む根幹のファイルの設定となっており、ファイル名を変えるとエラーになるので注意<br/>
					「node-sass」をインストールすることで「.scss」でそのままコンポーネントへインポートして使用できる
				</p>

				<h3 className="h3">
					index.js
				</h3>
				<p className="p">
					HTMLの指定のidにレンダリングする設定が書かれているトップレベルのファイル<br/>
					ReactDOMがインポートされており、最初に読み込まれる設定となっているため、ファイル名は変更するとエラーになる
				</p>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page2.Section2.code2}
					codeColor={codes.styles.tomorrow}
				/>

				<h3 className="h3">
					index.css
				</h3>
				<p className="p">
					index.jsで読み込まれているCSSファイル<br/>
					ほぼ簡易的な初期設定がなされているのみ
				</p>

				<h3 className="h3">
					serviceWorker.js
				</h3>
				<p className="p">
					静的ファイルをキャッシュする処理やキャッシュの管理、キャッシュしたファイルを利用する処理などが書かれている<br/>
					この処理があることで、ファイルの読み込みが速くなったり、オフラインでもキャッシュを利用してアプリケーションを実行することができる
				</p>

			<h2 className="h2">
				3. +α 〜 Service Workerとは 〜
			</h2>
				<p className="p">
					リッチなオフライン体験・定期的なバックグラウンド同期・プッシュ通知など、PWA(Progressive Web Apps)の機能を実現するために基盤となる技術<br/>
					具体的には以下のような内容が実現可能である
				</p>
				<p className="p">
				・訪問時にキャッシュしたファイルを利用して、ページが高速に読み込まれるように<br/>
				・ネットワークがオフライン状態になってても、キャッシュしたファイルを利用して動作するように<br/>
				・アップデートされたファイルは、バックグラウンドでダウンロードしキャッシュされるように<br/>
				・基本的にキャッシュされたファイルを利用するようになるため、通信量を抑えることができる
				</p>
				<p className="p">
					<Parts.Link
						url={urls.PWA}
						linkText="? PWA(Progressive Web Apps)"
					/>
				</p>

		</div>
	);
}

export default FileConst;
