import { FC } from 'react'

import Input from './components/atoms/Input'

const App: FC = () => {
	return (
		<div className='App'>
			<Input type='text' placeholder='Input user name' />
			<Input type='text' placeholder='Input password' />
		</div>
	)
}

export default App
