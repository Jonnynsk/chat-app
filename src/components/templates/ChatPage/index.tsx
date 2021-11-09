import { FC, useState, useEffect } from 'react'

import './styles.scss'

import Header from '../../molecules/Header'
import Users from '../../molecules/Users'
import NoUsers from '../../molecules/NoUsers'
import { DialogUsersProps } from '../../../models/DialogUsersProps'
import { useHistory } from 'react-router'
import { SCREENS } from '../../../routes/endpoints'
import ChatPart from '../../organisms/ChatPart'
// import SelectChat from './../../atoms/SelectChat/index'

const ChatPage: FC = () => {
	const [users, setUsers] = useState<DialogUsersProps[]>([
		{ id: 1, name: 'Konstantin Konstantinopolski', message: 'Hey!' },
		{ id: 2, name: 'Marina Joe', message: 'Sed ut per...' },
		{ id: 3, name: 'Ernest Gillroy', message: 'How are you doing?' },
	])
	const router = useHistory()

	return (
		<div className='chat_app'>
			<div className='chat_app_header'>
				<Header />
			</div>

			<div className='chat_app_sidebar'>
				<div className='chat_app_users'>
					{users.length ? (
						<Users
							users={users}
							onClick={() => router.push(SCREENS.SCREEN_CHAT_CURRENT)}
						/>
					) : (
						<div className='chat_app_users__empty'>
							<NoUsers />
						</div>
					)}
				</div>
			</div>
			<div className='chat_app_chat'>
				<ChatPart />
			</div>
		</div>
	)
}

export default ChatPage
