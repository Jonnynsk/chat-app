import { FC, useState } from 'react'

import './styles.scss'

import Header from '../../molecules/Header'
import chatBack from '../../../assets/images/chatBack.svg'
import Users from '../../molecules/Users'
import NoUsers from '../../molecules/NoUsers'
import { DialogUsersProps } from '../../../models/DialogUsersProps'
// import Loading from '../../atoms/Loading'

const ChatPage: FC = () => {
	const [users, setUsers] = useState<DialogUsersProps[]>([
		{ id: 1, name: 'Konstantin Konstantinopolski', message: 'Hey!' },
		{ id: 2, name: 'Marina Joe', message: 'Sed ut per...' },
		{ id: 3, name: 'Ernest Gillroy', message: 'How are you doing?' },
	])

	return (
		<div className='chat_app'>
			<div className='chat_app_header'>
				<Header />
			</div>
			<div className='chat_app_sidebar'>
				<div className='chat_app_users'>
					{users.length ? (
						<Users users={users} />
					) : (
						<div className='chat_app_users__empty'>
							<NoUsers />
						</div>
					)}
				</div>
			</div>
			<div className='chat_app_chat'>
				{/* <div className='chat_app_chat__loading'>
					<Loading />
				</div> */}
				<img src={chatBack} />
			</div>
		</div>
	)
}

export default ChatPage
