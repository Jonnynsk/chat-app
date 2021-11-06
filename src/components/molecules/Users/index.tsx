import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { DialogUsersProps } from '../../../models/DialogUsersProps'

import PickUser from '../PickUser'

interface UsersProps {
	users: DialogUsersProps[]
	onClick: () => void
}

const Users: FC<UsersProps> = ({ users, onClick }) => {
	return (
		<div>
			{users.map((user: { id: number; name: string; message: string }) => (
				<NavLink key={user.id} to={`/chat/${user.id}`}>
					<PickUser name={user.name} message={user.message} onClick={onClick} />
				</NavLink>
			))}
		</div>
	)
}
export default Users
