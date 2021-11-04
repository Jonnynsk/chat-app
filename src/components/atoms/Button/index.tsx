import { FC } from 'react'

import './styles.scss'

interface ButtonProps {
	type: 'button' | 'submit' | 'reset'
	onClick?: () => void
	children: React.ReactNode
	className: string
}

const Button: FC<ButtonProps> = ({ type, onClick, children, className }) => {
	return (
		<button type={type} onClick={onClick} className={className}>
			{children}
		</button>
	)
}

export default Button
