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
				{String(file.size).length <= 3 && `size : ${file.size} byte`}
				{3 < String(file.size).length && String(file.size).length < 7 && `size : ${file.size/1000} Kbyte`}
				{7 <= String(file.size).length && `size : ${file.size/1000000} Mbyte`}
			</p>
			<p className={Styles.dropZoneText}>
				Content-Type : {file.type}
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
									[ ファイルタイプが以下のものではありません ]<br/>
									PNG, JPEG, GIF, BMP
								</p>
							</div>
						)
				}
			</div>
			<div className={`p ${Styles.dropZone}`}>
				{
					files.length === 0 ?
					(
						<p className={Styles.dropZoneText}>
							[ ここにファイル名が表示される ]
						</p>
					)
					:
					files
				}
			</div>
		</div>
	</>
  )
}
export default Dropzone
