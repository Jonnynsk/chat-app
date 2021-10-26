import { FC } from 'react'

import './styles.scss'

import Header from '../../molecules/Header'
import chatBack from '../../../assets/images/chatBack.svg'
import Users from '../../molecules/Users'

const ChatPage: FC = () => {
	return (
		<div className='chat_app'>
			<div className='chat_app_header'>
				<Header />
				<div className='chat_app_users'>
					<Users />
				</div>
			</div>
			<div className='chat_app_sidebar'></div>
			<div className='chat_app_chat'>
				<img src={chatBack} />
			</div>
		</div>
	)
}

export default ChatPage
