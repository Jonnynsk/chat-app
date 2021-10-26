import { FC } from 'react'

import Logo from '../../atoms/Logo'
import Typography from '../../atoms/Typography'

import './styles.scss'

const Wellcome: FC = () => {
	return (
		<div>
			<div className='logo'>
				<Logo />
			</div>
			<div>
				<Typography type='1'>
					Wellcome to
					<span style={{ color: '#5E93E7' }}> Chatty</span>
					<span style={{ color: '#B3CDF8' }}>!</span>
				</Typography>
				<Typography type='2'>Please, autorize yourself</Typography>
			</div>
		</div>
	)
}

export default Wellcome
