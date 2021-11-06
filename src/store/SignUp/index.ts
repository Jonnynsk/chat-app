import axios from 'axios'

axios.get('http://109.194.37.212:93/api/auth').then(response => {
	console.log(response)
})
