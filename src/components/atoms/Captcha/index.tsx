import { FC, useState } from 'react'

import './styles.scss'

import update from '../../../assets/images/update.svg'

const Captcha: FC = () => {
	const [captcha, setCaptcha] = useState(
		'http://109.194.37.212:93/api/auth/captcha'
	)
	return (
		<div className='captcha'>
			<div className='captcha_img'>
				<img src={captcha} alt='captcha' />
			</div>
			<div className='captcha_update'>
				<img src={update} />
			</div>
		</div>
	)
}

export default Captcha
