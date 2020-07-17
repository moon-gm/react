
import React from 'react';
import codes from './../../../config/codes';
import Parts from './../../../config/parts';
import PropTypes from 'prop-types';

const PropType = ({ allData}) => {

	const tableData =[
		{validate: "PropTypes.string", check: "文字列型", sample: "\"文字列\" / \"1\"",},
		{validate: "PropTypes.number", check: "数値型", sample: "1 / 1.0",},
		{validate: "PropTypes.bool", check: "真偽型", sample: "true / false",},
		{validate: "PropTypes.func", check: "関数型", sample: "() => {console.log('func');}",},
		{validate: "PropTypes.symbol", check: "シンボル型(唯一無二のユニークな値)", sample: "Symbol() / Symbol('A')",},
		{validate: "PropTypes.array", check: "配列型(内部の型までは問わない)", sample: "[1, 'A'] / [{id: 1}, {name: 'A'}]",},
		{validate: "PropTypes.arrayOf(バリデーションの種類)", check: "配列型（内部の型を指定）", sample: "(数値型なら)[1, 2, 3]",},
		{validate: "PropTypes.object", check: "オブジェクト型(内部の型までは問わない)", sample: "{ a: 1, b: 'B' }",},
		{validate: "PropTypes.objectOf(バリデーションの種類)", check: "オブジェクト型（内部の型を指定)", sample: "(数値型なら){ a: 1, b: 2 }",},
		{validate: "PropTypes.shape({value1: バリデーションの種類})", check: "指定する型がバラバラ", sample: "(指定した型)",},
		{validate: "PropTypes.exact({value1: バリデーションの種類})", check: "指定する型がバラバラ(一致する型以外は弾く)", sample: "(指定した型のみ)",},
		{validate: "PropTypes.node", check: "レンダリングできるもの(真偽・オブジェクト以外)", sample: "1 / '文字列' / [1,2] / <p>Test</p>",},
		{validate: "PropTypes.element", check: "要素型", sample: "<Test /> / <p>Test</p>",},
		{validate: "PropTypes.elementType", check: "独自コンポーネント型", sample: "<Test />",},
		{validate: "PropTypes.instanceOf(クラス名)", check: "クラスオブジェクト型", sample: "new クラス名()",},
		{validate: "PropTypes.oneOf(['value1', 'value2'])", check: "指定した特定の値", sample: "(この場合) 'value1', 'value2'",},
		{validate: "PropTypes.oneOfType([複数のバリデーションの種類])", check: "指定した複数の型のどれか", sample: "",},
		{validate: "PropTypes.バリデーションの種類.isRequired", check: "必須チェック", sample: "-",},
		{validate: "PropTypes.any.isRequired", check: "型任意の必須チェック", sample: "-",},
	];

	return (
		<div className="page-layout">

			<h2 className="h2">
				1. prop-typesとは
			</h2>
				<p className="p">
					型のチェックなどバリデーションを行うライブラリ<br/>
					このライブラリを使うことで、組み込みの型チェック機能を有効化して
					コンポーネントのpropsに型チェックを行うために、
					特別な「propTypes」プロパティを割当てることができる。
				</p>

			<h2 className="h2">
				2. インストール方法
			</h2>
				<p className="p">
					以下のコマンドをプロジェクトディレクトリにて実行することで、インストールされる
				</p>
				<p className="p">
					<span className="command">
						$ npm install prop-types --save
					</span>
				</p>
				<p className="p">
					「--save」と付けることで、package.jsonに「prop-types」が追加
				</p>

			<h2 className="h2">
				3. 使用方法
			</h2>
				<h3 className="h3">
					3-1. コンポーネントを作成
				</h3>
				<div className="p">
					① 以下のようにインポートして「PropTypes」を有効化し、型チェック用の「propsType」が渡される
					<p className="p">
						※「PropTypes」は受け取ったデータが有効かどうかを確認するために使用できる種々のバリデーターをエクスポートしている
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section13.code1}
						codeColor={codes.styles.tomorrow}
					/>
					<br/>
					② コンポーネントに渡された「propsType」を使用し、以下のようにコンポーネント(Component)内のPropsをチェック
					<p className="p">
						このチェックは開発モードでのみ実行され、無効な値が渡されるとコンソールに警告文が出力される。<br/>
						※今回は、「name」propsが文字列型かどうかのチェックを行っている
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section13.code2}
						codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-2. バリデーターの種類
				</h3>
				<div className="table-box">
					<table>
						<thead>
							<tr>
								<th>
									バリデーター名
								</th>
								<th>
									チェック型
								</th>
								<th>
									受け付ける例
								</th>
							</tr>
						</thead>
						{
							tableData.map(item => {
								return (
									<tbody key={item.validate}>
										<tr>
											<td>
												{item.validate}
											</td>
											<td>
												{item.check}
											</td>
											<td>
												{item.sample}
											</td>
										</tr>
									</tbody>
								);
							})
						}
					</table>
				</div>

				<h3 className="h3">
					3-3. カスタムバリデーター
				</h3>
				<div className="p">
					① 独自にfunctionを定義し、それをバリデーターとして適用することができる
					<p className="p">
						※今回は、propsの値に「test」という文字列が含まれているかチェック
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section13.code3}
						codeColor={codes.styles.tomorrow}
					/>
				</div>

				<h3 className="h3">
					3-4. デフォルト値
				</h3>
				<div className="p">
					① 「defaultProps」を使って、propsのデフォルト値を設定
					<p className="p">
						propsに値が渡されなかった場合、このデフォルト値がセットされる。<br/>
						また、バリデーションチェックと並行して使用している場合、このデフォルト値セットが行われた後でバリデーションチェックが実行。
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page5.Section13.code4}
						codeColor={codes.styles.tomorrow}
					/>
				</div>
		</div>
	);
}

PropType.propTypes = {
	title: PropTypes.string,
	allData: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.oneOfType(
				PropTypes.string,
				PropTypes.func,
				PropTypes.objectOf(
					PropTypes.string
				),
				// allData内のchildren以下のバリデーション
				PropTypes.arrayOf(
					PropTypes.objectOf(
						PropTypes.oneOfType(
							PropTypes.string,
							PropTypes.func,
							PropTypes.objectOf(
								PropTypes.string
							)
						)
					)
				)
			)
		)
	)
}

PropType.defaultProps ={
	title: "5-13. Prop Types"
}

export default PropType;
