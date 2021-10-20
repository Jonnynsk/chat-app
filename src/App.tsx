import { FC } from 'react'

import Logo from './components/atoms/Logo'
import LoginForm from './components/molecules/LoginForm'

const App: FC = () => {
	return (
		<div className='App'>
			<Logo />
			<LoginForm />
		</div>
	)
}

export default App
