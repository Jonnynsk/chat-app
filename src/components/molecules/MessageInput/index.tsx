import { FC } from 'react'
import { useStore } from 'effector-react'

import './styles.scss'

import Attach from '../../atoms/Attach'
import SendMessage from './../../atoms/SendMessage/index'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../atoms/Input'
import { MessagesProps } from '../../../models/MessagesProps'
import $store, { addNewMessage, sendNewMessage } from '../../../store/Messages'

const MessageInput: FC = () => {
	const { control, handleSubmit } = useForm()
	const inputSubmit: SubmitHandler<MessagesProps> = data => {
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
			<SendMessage onClick={() => addNewMessage()} />
		</form>
	)
}

export default MessageInput
