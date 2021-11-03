import { FC } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
// import { useHistory } from 'react-router'

import './styles.scss'

import { RegDataProps } from '../../../models/RegDataProps'
import InputField from '../../molecules/InputField'
import classNames from 'classnames'

const RegistrationForm: FC = () => {
	// const history = useHistory()
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
				name='userName'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Create user name'
						placeholder='Input user name'
						type='text'
						className={classNames('input_field', {
							['error']: errors.userName,
						})}
					/>
				)}
			/>
			<Controller
				control={control}
				name='userName'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Create password'
						placeholder='Create password'
						type='password'
						className={classNames('input_field', {
							['error']: errors.password,
						})}
					/>
				)}
			/>
			<Controller
				control={control}
				name='userName'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Password confirmation'
						placeholder='Password confirmation'
						type='password'
						className={classNames('input_field', {
							['error']: errors.confirmation,
						})}
					/>
				)}
			/>
			<Controller
				control={control}
				name='userName'
				render={({ field: { onChange } }) => (
					<InputField
						onChange={onChange}
						labelName='Nickname'
						placeholder='Nickname'
						type='text'
						className={classNames('input_field', {
							['error']: errors.nickName,
						})}
					/>
				)}
			/>
		</form>
	)
}

export default RegistrationForm
