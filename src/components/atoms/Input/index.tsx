import { FC } from 'react'

interface InputProps {
	type: 'text' | 'password'
	placeholder: string
	className: string
	// onChange: (...event: []) => void
	onChange: (...event: any[]) => void
	value?: string
}

const Input: FC<InputProps> = ({ type, placeholder, className, ...rest }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={className}
			{...rest}
		/>
	)
}

export default Input
