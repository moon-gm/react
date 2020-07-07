import React from 'react'
import { useDropzone } from 'react-dropzone'
import Styles from './../../sass/parts/dropzone.module.scss'

function Dropzone() {

	// Propsに渡す値を定義
	const accept = "image/png, image/jpeg, image/bmp, image/gif"
	// Dropzoneの使用するhooksを定義し、Propsは上記定義の「accept」を使用
	const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({accept})

	// ドロップされたファイルに対する処理
	const files = acceptedFiles.map(file => (
		<React.Fragment key={file.name}>
			<p className={Styles.dropZoneText}>
				■ ファイル : {file.name}
			</p>
			<p className={Styles.dropZoneText}>
				name : {file.path}
			</p>
			<p className={Styles.dropZoneText}>
				size : {file.size}
			</p>
			<p className={Styles.dropZoneText}>
				type : {file.type}
			</p>
			{console.log(file)}
		</React.Fragment>
	));

  return (
	<>
		<div className="flex-box flex-box-no-sp">
			<div {...getRootProps()} className={`p ${Styles.dropZone}`}>
				<input {...getInputProps()} />
				{ // 初期の表示
					!isDragActive &&
						(
							<div>
								<p className={Styles.dropZoneText}>
									[ ここにファイルをドロップする ]
								</p>
								<p className={Styles.dropZoneText}>
									もしくは
								</p>
								<p className={Styles.dropZoneText}>
									[ クリックしてファイルを選択 ]
								</p>
							</div>
						)
				}
				{ // 許容ファイルのドラッグ時
					isDragActive && !isDragReject &&
						(
							<div>
								<p className={Styles.dropZoneText}>
									[ ここにファイルをドロップします ]
								</p>
							</div>
						)
				}
				{ // 不許可ファイルのドラッグ時
					isDragReject &&
						(
							<div>
								<p className={Styles.dropZoneText}>
									[ ファイルタイプが不正なものです ]
								</p>
							</div>
						)
				}
			</div>
			<div className={`p ${Styles.dropZone}`}>
				<p className={Styles.dropZoneText}>
					[ ここにファイル名が表示される ]
				</p>
				{files}
			</div>
		</div>
	</>
  )
}
export default Dropzone
