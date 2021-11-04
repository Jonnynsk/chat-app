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
import update from '../../../assets/images/update.svg'

const scheme = yup.object().shape({
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
		resolver: yupResolver(scheme),
	})
	const formSubmit: SubmitHandler<DataProps> = data => {
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
						className={classNames('input', 'input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.login?.message}</div>
			<Controller
				control={control}
				name='password'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Password'
						placeholder='Input password'
						type='password'
						className={classNames('input', 'input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.password?.message}</div>
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
							className={classNames('input', 'input_security', {
								['error']: errors.captcha,
							})}
						/>
					)}
				/>
				<div className='reg_form_captcha__input'>
					<Controller
						control={control}
						name='captcha'
						render={({ field: { onChange } }) => (
							<InputField
								onChange={onChange}
								labelName=' '
								placeholder=' '
								type='text'
								className={classNames('input', 'input_security')}
							/>
						)}
					/>
				</div>
				<span className='reg_form_captcha_update'>
					<img src={update} />
				</span>
			</div>
			<div className='error_message'>{errors.captcha?.message}</div>
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
