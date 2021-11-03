import { FC } from 'react'

import './styles.scss'

import Wellcome from '../../molecules/Wellcome'
import LoginForm from '../LoginForm'

const LoginPart: FC = () => {
	return (
		<div>
			<div className='wellcome_part'>
				<Wellcome header='Wellcome to' subHeader='Please, autorize yourself' />
			</div>

			<LoginForm />
		</div>
	)
}

export default LoginPart
