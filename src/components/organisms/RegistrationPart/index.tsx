import { FC } from 'react'

import './styles.scss'

import Wellcome from '../../molecules/Wellcome'
import RegistrationForm from '../RegistrationForm'

const RegistrationPart: FC = () => {
	return (
		<div className='reg_part'>
			<div className='reg_part_wellcome'>
				<Wellcome header='Sign Up to' subHeader='Registration' />
			</div>
			<div className='reg_part_main'>
				<RegistrationForm />
			</div>
		</div>
	)
}

export default RegistrationPart
