import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Login from '../pages/Login'
import Chat from '../pages/Chat'
import { SCREENS } from './endpoints'
import Registration from '../pages/SignUp'

const Routes: FC = () => {
	return (
		<Switch>
			<Route path={SCREENS.SCREEN_LOGIN} exact>
				<Login />
			</Route>
			<Route path={[SCREENS.SCREEN_CHAT, SCREENS.SCREEN_CHAT_CURRENT]} exact>
				<Chat />
			</Route>
			<Route path={SCREENS.SCREEN_REGISTRATION} exact>
				<Registration />
			</Route>
			<Redirect to={SCREENS.SCREEN_CHAT} />
		</Switch>
	)
}

export default Routes
