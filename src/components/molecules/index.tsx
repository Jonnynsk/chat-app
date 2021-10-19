import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface DataProps {
	user: string
	password: string
}

const LoginForm: FC = () => {
	const { register, handleSubmit } = useForm<DataProps>()
	const onSubmit: SubmitHandler<DataProps> = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				type='text'
				placeholder='Input user name'
				{...register('user')}
			/>
			<Input
				type='password'
				placeholder='Input password'
				{...register('password')}
			/>
			<Button type='submit'>Log in</Button>
		</form>
	)
}

export default LoginForm
