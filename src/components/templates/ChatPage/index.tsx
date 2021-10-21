import { FC } from 'react'

import './styles.scss'

import Header from '../../molecules/Header'
import chatBack from '../../../assets/images/chatBack.svg'

const ChatPage: FC = () => {
	return (
		<div className='chat_app'>
			<div className='header'>
				<Header />
			</div>
			<div className='sidebar'></div>
			<div className='chat'>
				<img src={chatBack} />
			</div>
		</div>
	)
}

export default ChatPage
