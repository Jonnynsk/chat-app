import { FC } from 'react'
import Select from 'react-select'

import './styles.scss'

import Label from '../Label'
import { LabelProps } from './../../../models/LabelProps'

interface SelectItemProps extends LabelProps {
	placeholder: string
}

const customStyles = {
	control: (base: any) => ({
		...base,
		height: 56,
		borderColor: '#B3CDF8',
		paddingLeft: 6,
		borderRadius: 8,
	}),
	dropdownIndicator: (styles: any) => ({
		...styles,
		color: '#5C98F1',
	}),
	placeholder: (base: any) => ({
		...base,
		color: '#9F9F9F',
	}),
	option: (base: any) => ({
		...base,
		height: 56,
		display: 'flex',
		alignItems: 'center',
		borderTop: '1px solid #F3F8FF',
	}),
}

const SelectItem: FC<SelectItemProps> = ({ placeholder, labelName }) => {
	const data = [
		{ value: 'Your gender', label: 'Your gender' },
		{ value: 'Male', label: 'Male', style: { color: 'red' } },
		{ value: 'Female', label: 'Female' },
	]
	return (
		<div>
			<Label labelName={labelName} />
			<Select
				styles={customStyles}
				className='select'
				placeholder={placeholder}
				options={data}
			/>
		</div>
	)
}

export default SelectItem
