import { FC } from 'react'

import './styles.scss'

// import Loading from '../../atoms/Loading'
// import SelectChat from '../../atoms/SelectChat'
import UserInfo from '../../molecules/UserInfo'
import MessageInput from './../../molecules/MessageInput/index'
import MessagesList from './../../molecules/MessagesList/index'

const ChatPart: FC = () => {
	return (
		<div>
			<UserInfo />
			{/* <div className='chat_app_chat_select'>
				<SelectChat />
				</div> */}

			{/* <div className='chat_app_chat__loading'>
				<Loading />
			</div> */}
			<MessagesList />
			<div className='chat-app-message-form'>
				<MessageInput />
			</div>
		</div>
	)
}

export default ChatPart
