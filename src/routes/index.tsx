import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Chat from '../pages/Chat'
import Login from '../pages/Login'
import { SCREENS } from './endpoints'

const Routes: FC = () => {
	return (
		<Switch>
			<Route path={SCREENS.SCREEN_LOGIN} exact>
				<Login />
			</Route>
			<Route path={SCREENS.SCREEN_CHAT} exact>
				<Chat />
			</Route>
			<Redirect to={SCREENS.SCREEN_CHAT} />
		</Switch>
	)
}

export default Routes
