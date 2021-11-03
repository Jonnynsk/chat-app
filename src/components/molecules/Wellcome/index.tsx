import { FC } from 'react'

import Logo from '../../atoms/Logo'
import Typography from '../../atoms/Typography'

import './styles.scss'

interface WellcomeProps {
	header: 'Wellcome to' | 'Sign Up to'
	subHeader: 'Please, autorize yourself' | 'Registration'
}

const Wellcome: FC<WellcomeProps> = ({ header, subHeader }) => {
	return (
		<div className='wellcome'>
			<div className='wellcome_logo'>
				<Logo />
			</div>
			<div>
				<div className='wellcome_header'>
					<Typography type='1'>
						{header}
						<span style={{ color: '#5E93E7' }}> Chatty</span>
						<span style={{ color: '#B3CDF8' }}>!</span>
					</Typography>
				</div>

				<Typography type='2'>{subHeader}</Typography>
			</div>
		</div>
	)
}

export default Wellcome
