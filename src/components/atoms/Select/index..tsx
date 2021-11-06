import { FC } from 'react'
import Select from 'react-select'

import './styles.scss'

import Label from '../Label'
import { LabelProps } from './../../../models/LabelProps'

interface SelectItemProps extends LabelProps {
	placeholder: string
	className: string
	name: string
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
	indicatorSeparator: () => ({
		display: 'none',
	}),
}

const SelectItem: FC<SelectItemProps> = ({
	placeholder,
	labelName,
	name,
	className,
}) => {
	const data = [
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	]
	return (
		<div>
			<Label labelName={labelName} />
			<Select
				styles={customStyles}
				className={className}
				placeholder={placeholder}
				options={data}
				name={name}
			/>
		</div>
	)
}

export default SelectItem
