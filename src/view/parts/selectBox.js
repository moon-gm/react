import React from 'react';
import Select from 'react-select';
import Styles from './../../sass/parts/selectBox.module.scss'

const SelectBox = ({options}) => {
  return (
	<div className={Styles.selectBoxWrap}>
		<Select options={options} />
	</div>
  );
};
export default SelectBox;
