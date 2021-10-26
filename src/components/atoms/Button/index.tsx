import { FC } from 'react'

import './styles.scss'

interface ButtonProps {
	type: string
	onClick?: () => void
	children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children, type, onClick, ...props }) => {
	return (
		<button {...props} className='button'>
			{children}
		</button>
	)
}

export default Button
