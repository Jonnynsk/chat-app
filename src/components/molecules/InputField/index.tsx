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
}

const InputField: FC<InputFieldProps> = ({
	labelName,
	type,
	placeholder,
	className,
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
			/>
		</div>
	)
}

export default InputField
