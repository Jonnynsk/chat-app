import { FC } from 'react'

import './styles.scss'

import sendMessage from '../../../assets/images/sendMessage.svg'

const SendMessage: FC = () => {
	return (
		<button className='button_send'>
			<img src={sendMessage} />
		</button>
	)
}

export default SendMessage
