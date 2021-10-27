import { FC } from 'react'

import { InputMessageProps } from '../../../models/InputMessageProps'

const InputMessage: FC<InputMessageProps> = ({
	type,
	placeholder,
	className,
	value,
	onChange,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={className}
			value={value}
			onChange={onChange}
		/>
	)
}

export default InputMessage
