import { FC } from 'react'

import './styles.scss'

const Button: FC = ({ children, ...props }) => {
	return (
		<button {...props} className='button'>
			{children}
		</button>
	)
}

export default Button
