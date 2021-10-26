import { FC } from 'react'

import Logo from '../../atoms/Logo'
import Typography from '../../atoms/Typography'

import './styles.scss'

const Wellcome: FC = () => {
	return (
		<div className='wellcome'>
			<div className='wellcome_logo'>
				<Logo />
			</div>
			<div>
				<div className='wellcome_header'>
					<Typography type='1'>
						Wellcome to
						<span style={{ color: '#5E93E7' }}> Chatty</span>
						<span style={{ color: '#B3CDF8' }}>!</span>
					</Typography>
				</div>

				<Typography type='2'>Please, autorize yourself</Typography>
			</div>
		</div>
	)
}

export default Wellcome
