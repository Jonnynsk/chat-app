import { FC } from 'react'

import './styles.scss'

interface ButtonProps {
	children: string
	type: string
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, type, onClick, ...props }) => {
	return (
		<button {...props} className='button'>
			{children}
		</button>
	)
}

export default Button
