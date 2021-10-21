import { FC } from 'react'

import './styles.scss'

import loginBack from '../../../assets/images/loginBack.svg'

const Wellcome: FC = () => {
	return (
		<div className='background'>
			<img src={loginBack} />
		</div>
	)
}

export default Wellcome
