import { FC } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import './styles.scss'

import { DataProps } from '../../../models/DataProps'

interface InputProps {
	type: string
	placeholder: string
	register: UseFormRegister<DataProps>
	label: Path<DataProps>
	className: string
}

const Input: FC<InputProps> = ({
	type,
	placeholder,
	register,
	label,
	className,
}) => {
	return (
		<div>
			<input
				{...register(label)}
				type={type}
				placeholder={placeholder}
				className={className}
			/>
		</div>
	)
}

export default Input
