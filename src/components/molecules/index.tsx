import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './styles.scss'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { DataProps } from '../../models/DataProps'

const scheme = yup.object().shape({
	user: yup.string().required('Something goes wrong'),
	password: yup.string().required('Something goes wrong'),
})

const LoginForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>({ resolver: yupResolver(scheme) })
	const formSubmit: SubmitHandler<DataProps> = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Input
				type='text'
				placeholder='Input user name'
				label='user'
				register={register}
			/>
			<div className='error'>{errors.user?.message}</div>
			<Input
				type='password'
				placeholder='Input password'
				label='password'
				register={register}
			/>
			<div className='error'>{errors.password?.message}</div>
			<Button type='submit'>Log in</Button>
		</form>
	)
}

export default LoginForm
