import axios from 'axios'

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://109.194.37.212:93/api/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
})
