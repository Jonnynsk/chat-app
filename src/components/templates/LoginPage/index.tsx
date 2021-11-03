import { FC } from 'react'

import LoginPart from '../../organisms/LoginPart'
import RightSide from '../../molecules/RightSide'

import './styles.scss'

const LoginPage: FC = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper_login'>
				<LoginPart />
			</div>
			<div className='wrapper_right'>
				<RightSide />
			</div>
		</div>
	)
}

export default LoginPage
