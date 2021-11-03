import { FC } from 'react'

import './styles.scss'

interface ButtonProps {
	type: 'button' | 'submit' | 'reset'
	onClick?: () => void
	children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
	return (
		<button type={type} onClick={onClick} className='button'>
			{children}
		</button>
	)
}

export default Button
