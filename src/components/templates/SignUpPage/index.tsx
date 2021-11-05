import { FC } from 'react'

import './styles.scss'

import RightSide from '../../molecules/RightSide'
import SignUpPart from '../../organisms/SignUpPart/index'

const SignUpPage: FC = () => {
	return (
		<div className='wrapper_reg'>
			<div className='wrapper_reg_main'>
				<SignUpPart />
			</div>
			<div className='wrapper_reg_right'>
				<RightSide />
			</div>
		</div>
	)
}

export default SignUpPage
