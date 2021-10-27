import { FC } from 'react'

import './styles.scss'

import { LabelProps } from '../../../models/LabelProps'

const Label: FC<LabelProps> = ({ labelName }) => {
	return <div className='label'>{labelName}</div>
}

export default Label
