import { FC } from 'react'

import './styles.scss'

import NoUsersLogo from '../../atoms/NoUsersLogo'
import Typography from '../../atoms/Typography'

const NoUsers: FC = () => {
	return (
		<div className='no_users'>
			<NoUsersLogo />
			<div className='no_users_text'>
				<Typography type='5'>There is no other users yet</Typography>
			</div>
		</div>
	)
}

export default NoUsers
