import { FC } from 'react'

import LoginForm from '../../molecules/LoginForm'
import Wellcome from '../../molecules/Wellcome'

import './styles.scss'

const LoginPage: FC = () => {
	return (
		<div className='wrapper'>
			<div className='login'>
				<LoginForm />
			</div>
			<div className='wellcome'>
				<Wellcome />
			</div>
		</div>
	)
}

export default LoginPage
