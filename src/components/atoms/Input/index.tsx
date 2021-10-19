import { FC } from 'react'

import './styles.scss'

interface InputProps {
	type: string
	placeholder: string
}

const Input: FC<InputProps> = (props: InputProps) => {
	return (
		<div>
			<input {...props} className='input' />
		</div>
	)
}

export default Input
