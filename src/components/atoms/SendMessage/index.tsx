import { FC } from 'react'

import './styles.scss'

import sendMessage from '../../../assets/images/sendMessage.svg'

interface SendMessageProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SendMessage: FC<SendMessageProps> = ({ onClick }) => {
	return (
		<button onClick={onClick} className='button_send'>
			<img src={sendMessage} alt='sendMessage' />
		</button>
	)
}

export default SendMessage
