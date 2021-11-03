import { FC } from 'react'

import './styles.scss'

import RightSide from '../../molecules/RightSide'
import RegistrationPart from './../../organisms/RegistrationPart/index'

const RegistrationPage: FC = () => {
	return (
		<div className='wrapper_reg'>
			<div className='wrapper_reg_main'>
				<RegistrationPart />
			</div>
			<div className='wrapper_reg_right'>
				<RightSide />
			</div>
		</div>
	)
}

export default RegistrationPage
