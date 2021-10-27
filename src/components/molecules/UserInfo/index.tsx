import { FC } from 'react'
import Online from '../../atoms/Online'

import './styles.scss'

const UserInfo: FC = () => {
	return (
		<div className='user_info'>
			<div className='user_info_online'>
				<Online userName='Marina Joe' wasOnline='Last seen 3 minutes ago' />
			</div>
		</div>
	)
}

export default UserInfo
