import { FC } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import './styles.scss'

interface DataProps {
	user: string
	password: string
}

interface InputProps {
	type: string
	placeholder: string
	register: UseFormRegister<DataProps>
	required: boolean
	label: Path<DataProps>
}

const Input: FC<InputProps> = ({
	type,
	placeholder,
	register,
	required,
	label,
}) => {
	return (
		<div>
			<input
				{...register(label, { required })}
				type={type}
				placeholder={placeholder}
				className='input'
			/>
		</div>
	)
}

export default Input
