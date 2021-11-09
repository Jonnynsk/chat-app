import { FC } from 'react'
import { useStore } from 'effector-react'

import './styles.scss'

import Message from '../../atoms/Message'
import $store from '../../../store/Messages'

const MessagesList: FC = () => {
	const store = useStore($store)
	return (
		<div className='messages_list'>
			{store.messages.map(message => (
				<Message key={message.id} message={message.message} />
			))}
		</div>
	)
}

export default MessagesList
