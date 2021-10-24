import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import logo from '../../../assets/images/logoSmall.svg'
import authUser from '../../../assets/images/authUser.svg'

const Header: FC = () => {
	return (
		<header>
			<img className='logo' src={logo} />
			<NavLink to='/login'>
				<img className='auth' src={authUser} />
			</NavLink>
		</header>
	)
}

export default Header
