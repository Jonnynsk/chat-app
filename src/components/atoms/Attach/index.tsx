import { FC } from 'react'

import './styles.scss'

import attach from '../../../assets/images/attach.svg'

const Attach: FC = () => {
	return <img className='attach' src={attach} alt='attachLogo' />
}

export default Attach
