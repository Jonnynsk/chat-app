import { FC } from 'react'

import PickUser from '../PickUser'

interface UsersProps {
	users: any
}

const Users: FC<UsersProps> = ({ users }) => {
	return (
		<div>
			{users.map((user: any) => (
				<PickUser key={user.id} name={user.name} message={user.message} />
			))}
		</div>
	)
}
export default Users
