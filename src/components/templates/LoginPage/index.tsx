import { FC } from 'react'

import LoginPart from '../../organisms/LoginPart'
import RightSide from '../../molecules/RightSide'

import './styles.scss'

const LoginPage: FC = () => {
	return (
		<div className='wrapper'>
			<div className='login'>
				<LoginPart />
			</div>
			<div className='right'>
				<RightSide />
			</div>
		</div>
	)
}

export default LoginPage
