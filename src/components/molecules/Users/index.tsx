import { FC } from 'react'

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
				<PickUser
					key={user.id}
					name={user.name}
					message={user.message}
					onClick={onClick}
				/>
			))}
		</div>
	)
}
export default Users
