import { createEffect } from 'effector'
import axios, { AxiosResponse } from 'axios'

import { DataProps } from './../../models/DataProps'
// import { RegDataProps } from './../../models/RegDataProps';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://109.194.37.212:93/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
})

// export const logFx = createEffect(async (login: string, password: string, captcha: string): Promise<AxiosResponse<DataProps>> => {
// 	return instance.post<DataProps>('api/auth/login', {login, password, captcha})
// })

export const loginFx = createEffect(async (data: DataProps) => {
	const res = await instance({
		method: 'POST',
		url: 'api/auth/login',
		data: { data },
	})
	return res.data
})

export const genders = axios
	.get('http://109.194.37.212:93/api/auth')
	.then(response => {
		console.log(response.data)
	})

// export const loginFx = createEffect(async (data: DataProps) => {
// 	await axios.post('http://109.194.37.212:93/api/auth/login', data)
// 		.then((response) => {
// 			console.log(response)
// 		})
// 	})
