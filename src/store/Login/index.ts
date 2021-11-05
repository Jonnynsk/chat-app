import { createEffect } from 'effector'
import axios from 'axios'
import { DataProps } from './../../models/DataProps'

export const login = createEffect(async (data: DataProps) => {
	await axios({
		method: 'post',
		url: 'http://109.194.37.212:93/api/auth/login',
		data: { data },
	})
})
