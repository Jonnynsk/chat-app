import { FC } from 'react'
import Wellcome from '../../molecules/Wellcome'
import RegistrationForm from '../RegistrationForm'

const RegistrationPart: FC = () => {
	return (
		<div>
			<Wellcome />
			<RegistrationForm />
		</div>
	)
}

export default RegistrationPart
