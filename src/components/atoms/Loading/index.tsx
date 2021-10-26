import { FC } from 'react'

import './styles.scss'

import loading from '../../../assets/images/loading.svg'

const Loading: FC = () => {
	return (
		<div className='loading'>
			<img src={loading} />
		</div>
	)
}

export default Loading
