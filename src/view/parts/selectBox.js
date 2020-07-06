import React from 'react';
import Select from 'react-select';
import Styles from './../../sass/parts/selectBox.module.scss'

const SelectBox = ({options, isMulti, isSearchable, autoFocus, isDisabled, onChange, func}) => {
	// 複数選択機能を付与
	if (isMulti) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} isMulti/>
			</div>
		);
	}
	// 検索機能を付与
	if (isSearchable) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} isSearchable/>
			</div>
		);
	}
	// オートフォーカス機能を付与
	if (autoFocus) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} autoFocus/>
			</div>
		);
	}
	// 非活性に設定
	if (isDisabled) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} isDisabled/>
			</div>
		);
	}
	// onChangeイベント設定
	if (onChange) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} onChange={func}/>
			</div>
		);
	}
	// デフォルト
	if (!isMulti && !isSearchable && !autoFocus && !isDisabled && !onChange) {
		return (
			<div className={Styles.selectBoxWrap}>
				<Select options={options} />
			</div>
		);
	}
};
export default SelectBox;
