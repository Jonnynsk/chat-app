import { FC } from 'react'

import './styles.scss'

import Wellcome from '../../molecules/Wellcome'
import SignUpForm from '../SignUpForm'

const SignUpPart: FC = () => {
	return (
		<div className='reg_part'>
			<div className='reg_part_wellcome'>
				<Wellcome header='Sign Up to' subHeader='Registration' />
			</div>
			<div className='reg_part_main'>
				<SignUpForm />
			</div>
		</div>
	)
}

export default SignUpPart
