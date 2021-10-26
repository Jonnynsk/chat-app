import { FC, useState } from 'react'

import PickUser from '../PickUser'

interface UsersProps {
	id: number
	name: string
	message: string
}

const Users: FC = () => {
	const [users, setUsers] = useState<UsersProps[]>([
		{ id: 1, name: 'Konstantin Konstantinopolski', message: 'Hey!' },
		{ id: 2, name: 'Marina Joe', message: 'Sed ut per...' },
		{ id: 3, name: 'Ernest Gillroy', message: 'How are you doing?' },
	])

	return (
		<div>
			{users.map(user => (
				<PickUser name={user.name} message={user.message} />
			))}
		</div>
	)
}
export default Users
