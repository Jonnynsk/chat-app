import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import './styles.scss'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { DataProps } from '../../models/DataProps'

const LoginForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>()
	const formSubmit: SubmitHandler<DataProps> = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Input
				type='text'
				placeholder='Input user name'
				label='user'
				register={register}
				required
			/>
			<div className='error'>
				{errors.user && <span>Something goes wrong</span>}
			</div>
			<Input
				type='password'
				placeholder='Input password'
				label='password'
				register={register}
				required
			/>
			<div className='error'>
				{errors.password && <span>Something goes wrong</span>}
			</div>
			<Button type='submit'>Log in</Button>
		</form>
	)
}

export default LoginForm
