import { FC } from 'react'

import PickUser from '../PickUser'

interface UsersProps {
	users: any
	// users: [{id: number; name: string; message: string}]
}

const Users: FC<UsersProps> = ({ users }) => {
	return (
		<div>
			{users.map((user: { id: number; name: string; message: string }) => (
				<PickUser key={user.id} name={user.name} message={user.message} />
			))}
		</div>
	)
}
export default Users
