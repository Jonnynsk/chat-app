import { FC, useState } from 'react'

import './styles.scss'

import Header from '../../molecules/Header'
import chatBack from '../../../assets/images/chatBack.svg'
import Users from '../../molecules/Users'
import NoUsers from '../../molecules/NoUsers'

interface UsersProps {
	id: number
	name: string
	message: string
}

const ChatPage: FC = () => {
	const [users, setUsers] = useState<UsersProps[]>([
		{ id: 1, name: 'Konstantin Konstantinopolski', message: 'Hey!' },
		{ id: 2, name: 'Marina Joe', message: 'Sed ut per...' },
		{ id: 3, name: 'Ernest Gillroy', message: 'How are you doing?' },
	])

	return (
		<div className='chat_app'>
			<div className='chat_app_header'>
				<Header />
				<div className='chat_app_users'>
					{users.length ? <Users users={users} /> : <NoUsers />}
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
