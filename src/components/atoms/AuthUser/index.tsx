import { FC } from 'react'

import './styles.scss'

import authUser from '../../../assets/images/authUser.svg'

const AuthUser: FC = () => {
	return (
		<div className='auth'>
			<img src={authUser} />
		</div>
	)
}

export default AuthUser
