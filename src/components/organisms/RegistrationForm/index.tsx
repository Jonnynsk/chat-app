import { FC } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useHistory } from 'react-router'

import './styles.scss'

import { RegDataProps } from '../../../models/RegDataProps'
import InputField from '../../molecules/InputField'
import classNames from 'classnames'
import Button from '../../atoms/Button'
import SelectItem from '../../atoms/Select/index.'
import update from '../../../assets/images/update.svg'

const RegistrationForm: FC = () => {
	const history = useHistory()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegDataProps>({
		// resolver: yupResolver(scheme),
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
								className={classNames('input', 'input_security', {
									['error']: errors.captcha,
								})}
							/>
						)}
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

export default RegistrationForm
