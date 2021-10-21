import { FC } from 'react'

import Logo from '../../atoms/Logo'

import './styles.scss'

const Wellcome: FC = () => {
	return (
		<div>
			<div className='logo'>
				<Logo />
			</div>
			<div>
				<h1>
					Wellcome to
					<span style={{ color: '#5E93E7' }}> Chatty</span>
					<span style={{ color: '#B3CDF8' }}>!</span>
				</h1>
				<h2>Please, autorize yourself</h2>
			</div>
		</div>
	)
}

export default Wellcome
