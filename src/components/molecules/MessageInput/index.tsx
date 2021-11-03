import { FC, useState } from 'react'

import './styles.scss'

import Attach from '../../atoms/Attach'
import SendMessage from './../../atoms/SendMessage/index'
import { Controller, useForm } from 'react-hook-form'
import Input from '../../atoms/Input'

const MessageInput: FC = () => {
	const [messages, setMessages] = useState([{ id: 1, value: 'Hello' }])
	const [value, setValue] = useState<string>('')

	const sendNewMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// if (value) return
		const newMessage = { value, id: Date.now() }
		setMessages([...messages, newMessage])
		setValue('')
	}

	const { control } = useForm()

	return (
		<div className='form_message'>
			<Attach />
			<Controller
				control={control}
				name='message'
				render={({ field: { onChange } }) => (
					<Input
						onChange={onChange}
						className='message_input'
						type='text'
						placeholder='Write something...'
					/>
				)}
			/>
			<SendMessage onClick={sendNewMessage} />
		</div>
	)
}

export default MessageInput
