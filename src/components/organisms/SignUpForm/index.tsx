import { FC, useEffect } from 'react'
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
import Captcha from '../../atoms/Captcha'
import { gendersFx, $genders, signupFx } from '../../../store/SignUp'
import { useStore } from 'effector-react'

const schema = yup.object().shape({
	login: yup.string().max(50).required('Something goes wrong'),
	password: yup.string().required('Something goes wrong'),
	password_confirm: yup
		.string()
		.oneOf([yup.ref('password'), null])
		.required('Passwords must match'),
	name: yup.string().max(50).required('Something goes wrong'),
	// gender_id: yup.string().required("Required"),
	captcha: yup.string().length(5).required('Required'),
})

const SignUpForm: FC = () => {
	const history = useHistory()
	const genders = useStore($genders)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegDataProps>({
		defaultValues: {
			login: '',
			password: '',
			password_confirm: '',
			name: '',
			gender_id: '',
			captcha: '',
		},
		resolver: yupResolver(schema),
	})

	useEffect(() => {
		gendersFx()
	}, [])

	const regSubmit: SubmitHandler<RegDataProps> = (data: RegDataProps) => {
		signupFx(data)
		console.log(data)
		history.push('/login')
	}

	return (
		<form onSubmit={handleSubmit(regSubmit)} className='reg_form'>
			<Controller
				control={control}
				name='login'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Create user name'
						placeholder='Input user name'
						type='text'
						error={errors.login?.message}
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
						error={errors.password?.message}
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
						error={errors.password_confirm?.message}
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
						error={errors.name?.message}
						className={classNames('input', 'input_field', {
							['error']: errors.name,
						})}
					/>
				)}
			/>
			<Controller
				control={control}
				name='gender_id'
				render={({ field: { onChange } }) => (
					<SelectItem
						onChange={onChange}
						labelName='Your gender'
						placeholder='Your gender'
						options={genders.genders}
						error={errors.gender_id?.message}
						className={classNames('select', {
							// ['error']: errors.gender_id,
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
