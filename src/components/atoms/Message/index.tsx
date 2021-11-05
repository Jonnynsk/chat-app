import { FC } from 'react'
import Typography from '../Typography'

import './styles.scss'

interface MessageProps {
	message: string
}

const Message: FC<MessageProps> = ({ message }) => {
	return (
		<div className='message'>
			<Typography type='5'>{message}</Typography>
		</div>
	)
}

export default Message
