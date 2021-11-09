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
import { loginFx } from '../../../store/Login'
import Captcha from '../../atoms/Captcha'

const schema = yup.object().shape({
	login: yup.string().required('Something goes wrong'),
	password: yup.string().required('Something goes wrong'),
	captcha: yup.string().required('Something goes wrong'),
})

const LoginForm: FC = () => {
	const history = useHistory()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProps>({
		defaultValues: {
			login: '',
			password: '',
			captcha: '',
		},
		resolver: yupResolver(schema),
	})
	const formSubmit: SubmitHandler<DataProps> = (data: DataProps) => {
		loginFx(data)
		history.push('/chat')
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)} className='login_form'>
			<Controller
				control={control}
				name='login'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='User name'
						placeholder='Input user name'
						type='text'
						error={errors.login?.message}
						className={classNames('input', 'input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<Controller
				control={control}
				name='password'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Password'
						placeholder='Input password'
						type='password'
						error={errors.password?.message}
						className={classNames('input', 'input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<div className='reg_form_captcha'>
				<Controller
					control={control}
					name='captcha'
					render={({ field: { onChange } }) => (
						<InputField
							onChange={onChange}
							labelName='Security code'
							placeholder='Security code'
							type='text'
							error={errors.captcha?.message}
							className={classNames('input', 'input_security', {
								['error']: errors.captcha,
							})}
						/>
					)}
				/>
				<div className='reg_form_captcha__img'>
					<Captcha />
				</div>
			</div>
			<div className='form_buttons'>
				<Button type='submit' className={classNames('button', 'button_submit')}>
					Log in
				</Button>
				<Button
					onClick={() => history.push('/signup')}
					type='button'
					className={classNames('button', 'button_button')}
				>
					Registration
				</Button>
			</div>
		</form>
	)
}

export default LoginForm
