import axios from 'axios'
import { createEffect } from 'effector'

import { instance } from '../instance'
import { RegDataProps } from './../../models/RegDataProps'

// axios.get('http://109.194.37.212:93/api/auth').then(response => {
// 	console.log(response)
// })

export const signupFx = createEffect(async (data: RegDataProps) => {
	const regData = new FormData()
	regData.append('login', data.login)
	regData.append('password', data.password)
	regData.append('password_confirm', data.password_confirm)
	regData.append('name', data.name)
	regData.append('gender_id', data.gender_id)
	regData.append('captcha', data.captcha)
	const res = await instance({
		method: 'POST',
		url: 'auth/register',
		data: regData,
	})
	return res.data
})

export const genders = axios
	.get('http://109.194.37.212:93/api/auth')
	.then(response => {
		console.log(response.data)
	})
