import { FC } from 'react'

import chatBack from '../../../assets/images/chatBack.svg'

const ChatBack: FC = () => {
	return (
		<div className='chat_back'>
			<img src={chatBack} alt='chatBack' />
		</div>
	)
}

export default ChatBack
