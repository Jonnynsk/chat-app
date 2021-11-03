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
		<form onSubmit={handleSubmit(formSubmit)}>
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
							['error']: errors.password,
						})}
					/>
				)}
			/>
		</form>
	)
}

export default RegistrationForm
