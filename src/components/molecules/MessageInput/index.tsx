import { FC } from 'react'
import { useStore } from 'effector-react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './styles.scss'

import Attach from '../../atoms/Attach'
import SendMessage from './../../atoms/SendMessage/index'
import Input from '../../atoms/Input'
import { MessagesProps } from '../../../models/MessagesProps'
import $store, { addNewMessage, sendNewMessage } from '../../../store/Messages'

const schema = yup.object().shape({
	message: yup.string().min(3).max(5).required(),
})

const MessageInput: FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<MessagesProps>({
		resolver: yupResolver(schema),
	})
	const inputSubmit: SubmitHandler<MessagesProps> = (data: MessagesProps) => {
		console.log(data)
	}

	const store = useStore($store)

	return (
		<form onSubmit={handleSubmit(inputSubmit)} className='form_message'>
			<Attach />
			<Controller
				control={control}
				name='message'
				render={({}) => (
					<Input
						// onChange={onChange}
						// onChange={(e) => sendNewMessage(e.target.value)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							sendNewMessage(e.currentTarget.value)
						}
						value={store.newMessage}
						className='message_input'
						type='text'
						placeholder='Write something...'
					/>
				)}
			/>
			{/* <div className='error_message'>{errors.message?.message}</div> */}
			<SendMessage onClick={() => addNewMessage()} />
		</form>
	)
}

export default MessageInput
