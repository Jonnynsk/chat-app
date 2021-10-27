import { FC, useState } from 'react'

import './styles.scss'

import InputMessage from '../../atoms/InputMessage'
import Attach from '../../atoms/Attach'
import SendMessage from './../../atoms/SendMessage/index'

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

	return (
		<div className='form_message'>
			<Attach />
			<InputMessage
				value={value}
				onChange={e => setValue(e.target.value)}
				type='text'
				placeholder='Write something...'
				className='message_input'
			/>
			<SendMessage onClick={sendNewMessage} />
		</div>
	)
}

export default MessageInput
