import { FC } from 'react'

import { InputMessageProps } from '../../../models/InputMessageProps'

const InputMessage: FC<InputMessageProps> = ({
	type,
	placeholder,
	className,
}) => {
	return <input type={type} placeholder={placeholder} className={className} />
}

export default InputMessage
