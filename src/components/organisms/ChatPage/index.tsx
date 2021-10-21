import { FC } from 'react'

import Header from '../../molecules/Header'

import './styles.scss'

const ChatPage: FC = () => {
	return (
		<div className='chat_app'>
			<div className='header'>
				<Header />
			</div>
			<div className='sidebar'>sidebar</div>
			<div className='chat'>chat</div>
		</div>
	)
}

export default ChatPage
