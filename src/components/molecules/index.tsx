import { FC } from 'react'

import Button from '../atoms/Button'
import Input from '../atoms/Input'

const LoginForm: FC = () => {
	return (
		<form>
			<Input type='text' placeholder='Input user name' />
			<Input type='text' placeholder='Input password' />
			<Button>Log In</Button>
		</form>
	)
}

export default LoginForm
