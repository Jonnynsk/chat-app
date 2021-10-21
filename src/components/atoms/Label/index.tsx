import { FC } from 'react'

import './styles.scss'

interface LabelProps {
	label: 'User name' | 'Password'
}

const Label: FC<LabelProps> = ({ label }) => {
	return <div className='label'>{label}</div>
}

export default Label
