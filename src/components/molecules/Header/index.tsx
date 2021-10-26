import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import LogoSmall from '../../atoms/LogoSmall'
import AuthUser from '../../atoms/AuthUser'

const Header: FC = () => {
	return (
		<header>
			<div className='logo'>
				<LogoSmall />
			</div>
			<div className='auth'>
				<NavLink to='/login'>
					<AuthUser />
				</NavLink>
			</div>
		</header>
	)
}

export default Header
