import { FC } from 'react'
import Select from 'react-select'

import './styles.scss'

import Label from '../Label'
import { LabelProps } from './../../../models/LabelProps'

interface SelectItemProps extends LabelProps {
	onChange: (...event: []) => void
	placeholder: string
	className: string
	error?: string
	options: { id: number; gender: string }[]
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
	onChange,
	placeholder,
	labelName,
	className,
	options,
	error,
	...rest
}) => {
	const data = options.map(item => ({
		value: item.id,
		label: item.gender,
	}))
	return (
		<div>
			<Label labelName={labelName} />
			<Select
				onChange={onChange}
				styles={customStyles}
				className={className}
				placeholder={placeholder}
				options={data}
				{...rest}
			/>
			<div className='error_message'>{error}</div>
		</div>
	)
}

export default SelectItem
