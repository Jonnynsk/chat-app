import { FC } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './styles.scss'

import { RegDataProps } from '../../../models/RegDataProps'
import InputField from '../../molecules/InputField'
import classNames from 'classnames'
import Button from '../../atoms/Button'
import SelectItem from '../../atoms/Select/index.'
import update from '../../../assets/images/update.svg'

const scheme = yup.object().shape({
	login: yup.string().max(50).required('Something goes wrong'),
	password: yup.string().required('Something goes wrong'),
	password_confirm: yup.string().required('Something goes wrong'),
	name: yup.string().required('Something goes wrong'),
	gender_id: yup.number().required('Something goes wrong'),
	captcha: yup.string().required('Something goes wrong'),
})

const SignUpForm: FC = () => {
	const history = useHistory()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegDataProps>({
		resolver: yupResolver(scheme),
	})
	const formSubmit: SubmitHandler<RegDataProps> = data => {
		// history.push('/chat')
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)} className='reg_form'>
			<Controller
				control={control}
				name='login'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Create user name'
						placeholder='Input user name'
						type='text'
						className={classNames('input', 'input_field', {
							['error']: errors.login,
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
						labelName='Create password'
						placeholder='Create password'
						type='password'
						className={classNames('input', 'input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.password?.message}</div>
			<Controller
				control={control}
				name='password_confirm'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Password confirmation'
						placeholder='Password confirmation'
						type='password'
						className={classNames('input', 'input_field', {
							['error']: errors.password_confirm,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.password_confirm?.message}</div>
			<Controller
				control={control}
				name='name'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Nickname'
						placeholder='Nickname'
						type='text'
						className={classNames('input', 'input_field', {
							['error']: errors.name,
						})}
					/>
				)}
			/>
			<div className='error_message'>{errors.name?.message}</div>
			<SelectItem labelName='Your gender' placeholder='Your gender' />
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
				{/* <div className='error_message'>{errors.captcha?.message}</div> */}
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
					<img
						src='http://109.194.37.212:93/api/auth/captcha'
						alt='captcha'
						className='captcha_signup'
					/>
				</div>
				<span className='reg_form_captcha_update'>
					<img src={update} />
				</span>
			</div>
			<div className='reg_form_buttons'>
				<Button type='submit' className={classNames('button', 'button_submit')}>
					Register
				</Button>
				<Button
					onClick={() => history.push('/login')}
					type='button'
					className={classNames('button', 'button_button')}
				>
					Log In
				</Button>
			</div>
		</form>
	)
}

export default SignUpForm
