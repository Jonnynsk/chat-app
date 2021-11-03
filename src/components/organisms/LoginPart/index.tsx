import { FC } from 'react'

import './styles.scss'

import Wellcome from '../../molecules/Wellcome'
import LoginForm from '../LoginForm'

const LoginPart: FC = () => {
	return (
		<div>
			<Wellcome />
			<LoginForm />
		</div>
	)
}

export default LoginPart
