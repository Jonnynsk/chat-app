import { FC } from 'react'

import './styles.scss'

import MaleUser from '../../atoms/UserPic'
import Typography from '../../atoms/Typography'

interface PickUserProps {
	name: string
	message: string
	onClick: () => void
}

const PickUser: FC<PickUserProps> = ({ name, message, onClick }) => {
	return (
		<div className='frame' onClick={onClick}>
			<div className='frame_user'>
				<MaleUser />
				<div className='frame_user_text'>
					<div className='frame_user_text__name'>
						<Typography type='4'>{name}</Typography>
					</div>
					<Typography type='6'>{message}</Typography>
				</div>
			</div>
		</div>
	)
}

export default PickUser
