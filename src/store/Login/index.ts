import { createEffect } from 'effector'

import { DataProps } from './../../models/DataProps'
import { instance } from '../instance'

export const loginFx = createEffect(async (data: DataProps) => {
	const loginData = new FormData()
	loginData.append('login', data.login)
	loginData.append('password', data.password)
	loginData.append('captcha', data.captcha)
	const res = await instance({
		method: 'POST',
		url: 'auth/login',
		data: loginData,
	})
	return res.data
})
