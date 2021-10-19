import { FC } from 'react'

import './styles.scss'

interface ButtonProps {
	children: string
	type: string
}

const Button: FC<ButtonProps> = ({ children, type, ...props }) => {
	return (
		<button {...props} className='button'>
			{children}
		</button>
	)
}

export default Button
