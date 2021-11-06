import { FC } from 'react'

import './styles.scss'

import Label from './../../atoms/Label/index'
import Input from '../../atoms/Input'
import { LabelProps } from './../../../models/LabelProps'

interface InputFieldProps extends LabelProps {
	type: 'text' | 'password'
	placeholder: string
	className: string
	onChange: (...event: []) => void
	error?: string
}

const InputField: FC<InputFieldProps> = ({
	labelName,
	type,
	placeholder,
	className,
	error,
	...rest
}) => {
	return (
		<div>
			<Label labelName={labelName} />
			<Input
				{...rest}
				type={type}
				placeholder={placeholder}
				className={className}
				error={error}
			/>
			<div className='error_message'>{error}</div>
		</div>
	)
}

export default InputField
