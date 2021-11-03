import { FC } from 'react'
import classNames from 'classnames'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
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
	password: yup.string().min(5).required(),
})

const LoginForm: FC = () => {
	const history = useHistory()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>({
		resolver: yupResolver(scheme),
	})
	const formSubmit: SubmitHandler<DataProps> = data => {
		history.push('/chat')
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Label labelName='User name' />
			<Controller
				control={control}
				name='user'
				render={({ field: { onChange } }) => (
					<Input
						onChange={onChange}
						className={classNames('input_field', {
							['error']: errors.password,
						})}
						type='text'
						placeholder='Input user name'
					/>
				)}
			/>
			<div className='error_message'>{errors.user?.message}</div>
			<div className='input-margin'>
				<Label labelName='Password' />
				<Controller
					control={control}
					name='password'
					render={({ field: { onChange } }) => (
						<Input
							onChange={onChange}
							className={classNames('input_field', {
								['error']: errors.password,
							})}
							type='password'
							placeholder='Input password'
						/>
					)}
				/>
				<div className='error_message'>{errors.password?.message}</div>
			</div>

			<div className='form_button'>
				<Button type='submit'>Log in</Button>
			</div>
		</form>
	)
}

export default LoginForm
