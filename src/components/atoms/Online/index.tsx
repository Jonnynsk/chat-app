import { FC } from 'react'

import './styles.scss'

import Typography from '../Typography'

interface OnlineProps {
	userName: string
	wasOnline: string
}

const Online: FC<OnlineProps> = ({ userName, wasOnline }) => {
	return (
		<div>
			<div className='username'>
				<Typography type='3'>{userName}</Typography>
			</div>
			<Typography type='6'>{wasOnline}</Typography>
		</div>
	)
}

export default Online
