import { FC } from 'react'
import cn from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router'

import './styles.scss'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { DataProps } from '../../../models/DataProps'
import Label from '../../atoms/Label'

const scheme = yup.object().shape({
	user: yup.string().required('Something goes wrong'),
	password: yup.string().required('Something goes wrong'),
})

const LoginForm: FC = () => {
	const history = useHistory()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>({ resolver: yupResolver(scheme) })
	const formSubmit: SubmitHandler<DataProps> = data => {
		console.log(data)
		history.push('/chat')
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Label label='User name' />
			<Input
				type='text'
				placeholder='Input user name'
				label='user'
				register={register}
				className={cn({ ['error']: errors.user })}
			/>
			<div className='error_message'>{errors.user?.message}</div>
			<Label label='Password' />
			<Input
				type='password'
				placeholder='Input password'
				label='password'
				register={register}
				className={cn({ ['error']: errors.password })}
			/>
			<div className='error_message'>{errors.password?.message}</div>
			<div className='form_button'>
				<Button type='submit'>Log in</Button>
			</div>
		</form>
	)
}

export default LoginForm
