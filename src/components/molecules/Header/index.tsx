import { FC } from 'react'

import './styles.scss'

import logo from '../../../assets/images/logoSmall.svg'
import authUser from '../../../assets/images/authUser.svg'

const Header: FC = () => {
	return (
		<header>
			<img className='logo' src={logo} />
			<img className='auth' src={authUser} />
		</header>
	)
}

export default Header
