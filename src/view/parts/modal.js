import React, { useState } from 'react';
import Modal from 'react-modal';
import Styles from './../../sass/parts/modal.module.scss'

// モーダルウィンドウのCSS設定
const customStyles = {
	// 背景のCSS設定
	overlay : {

	},
	// モーダルウィンドウのCSS設定
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		background            : '#282c34',
	}
};

//任意のアプリを設定する　create-react-appなら#root
Modal.setAppElement('#root');

const ModalWindow = ({title, content, openBtn}) => {

	// State設定
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// モーダル表示時の処理
	function openModal() {
		setModalIsOpen(true);
	}

	// モーダル表示後の処理
	function afterOpenModal() {
		document.getElementById('title').style.color = '#61dafb';
	}

	// モーダル閉じた後の処理
	function closeModal() {
		setModalIsOpen(false);
	}

	return (
		<div>
		<button
			onClick={openModal}
			className={Styles.openModal}
		>
			{openBtn}
		</button>
		<Modal
			isOpen={modalIsOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<h2
				id="title"
				className={Styles.title}
			>
				{title}
			</h2>
			<p
				id="content"
				className={Styles.content}
			>
				{content}
			</p>
			<button
				onClick={closeModal}
				className={Styles.closeModal}
			>
				閉じる
			</button>
		</Modal>
		</div>
	);
}
export default ModalWindow;
