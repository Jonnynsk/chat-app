import { FC } from 'react'
import classNames from 'classnames'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router'

import './styles.scss'

import Button from '../../atoms/Button'
import InputField from '../../molecules/InputField'
import { DataProps } from '../../../models/DataProps'

const scheme = yup.object().shape({
	user: yup.string().required('Something goes wrong'),
	password: yup.string().min(5).required('Something goes wrong'),
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
			<Controller
				control={control}
				name='user'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='User name'
						placeholder='Input user name'
						type='text'
						className={classNames('input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.user?.message}</div>
			<div className='input-margin'>
				<Controller
					control={control}
					name='password'
					render={({ field: { onChange } }) => (
						<InputField
							onChange={onChange}
							labelName='Password'
							placeholder='Input password'
							type='password'
							className={classNames('input_field', {
								['error']: errors.password,
							})}
						/>
					)}
				/>
				<div className='error_message'>{errors.password?.message}</div>
			</div>

			<div className='form_buttons'>
				<Button type='submit'>Log in</Button>
			</div>
		</form>
	)
}

export default LoginForm
