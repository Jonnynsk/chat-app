import { FC } from 'react'

import './styles.scss'

import chatBack from '../../../assets/images/chatBack.svg'

const ChatBack: FC = () => {
	return (
		<div className='chat_back'>
			<img src={chatBack} />
		</div>
	)
}

export default ChatBack
