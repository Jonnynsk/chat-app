import { FC } from 'react'
import Typography from '../Typography'

import './styles.scss'

interface MessageItemProps {
	value: string
}

const MessageItem: FC<MessageItemProps> = ({ value }) => {
	return (
		<div className='message'>
			<Typography type='5'>{value}</Typography>
		</div>
	)
}

export default MessageItem
