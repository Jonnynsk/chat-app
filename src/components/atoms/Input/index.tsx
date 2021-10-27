import { FC } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import { DataProps } from '../../../models/DataProps'

interface InputProps {
	type: string
	placeholder: string
	className: string
	register: UseFormRegister<DataProps>
	label: Path<DataProps>
}

const Input: FC<InputProps> = ({
	type,
	placeholder,
	className,
	register,
	label,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={className}
			{...register(label)}
		/>
	)
}

export default Input
