import { FC } from 'react'

import LoginForm from '../../molecules/LoginForm'
import RightSide from '../../molecules/RightSide'

import './styles.scss'

const LoginPage: FC = () => {
	return (
		<div className='wrapper'>
			<div className='login'>
				<LoginForm />
			</div>
			<div className='right'>
				<RightSide />
			</div>
		</div>
	)
}

export default LoginPage
