import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { DataProps } from '../../models/DataProps'

const LoginForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>()
	const formSubmit: SubmitHandler<DataProps> = (data: DataProps) =>
		console.log(data)

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Input
				type='text'
				placeholder='Input user name'
				label='user'
				register={register}
				required
			/>
			{errors.user && <span>Something goes wrong</span>}
			<Input
				type='password'
				placeholder='Input password'
				label='password'
				register={register}
				required
			/>
			{errors.password && <span>Something goes wrong</span>}
			<Button type='submit'>Log in</Button>
		</form>
	)
}

export default LoginForm
