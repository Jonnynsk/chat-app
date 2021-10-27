import { FC } from 'react'

import './styles.scss'

import InputMessage from '../../atoms/InputMessage'
import Attach from '../../atoms/Attach'
import SendMessage from './../../atoms/SendMessage/index'

const MessageInput: FC = () => {
	return (
		<div className='form_message'>
			<Attach />
			<InputMessage
				type='text'
				placeholder='Write something...'
				className='message_input'
			/>
			<SendMessage />
		</div>
	)
}

export default MessageInput
