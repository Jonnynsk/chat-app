import { FC } from 'react'

import './styles.scss'

interface TypographyProps {
	type: '1' | '2' | '3' | '4' | '5' | '6'
	children: React.ReactNode
}

const Typography: FC<TypographyProps> = ({ type, children }) => {
	switch (type) {
		case '1':
			return <h1 className='header1'>{children}</h1>
		case '2':
			return <h2 className='header2'>{children}</h2>
		case '3':
			return <h3 className='header3'>{children}</h3>
		case '4':
			return <h4 className='header4'>{children}</h4>
		case '5':
			return <p className='paragraph1'>{children}</p>
		case '6':
			return <p className='paragraph2'>{children}</p>
	}
}

export default Typography
