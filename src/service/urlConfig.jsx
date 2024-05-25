import axios from 'axios'

export const BASE_URL = 'http://localhost:8080'
// export const BASE_URL_IMG = 'http://localhost:8080/public/imgs/'

export const http = axios.create({
	baseURL: BASE_URL,
})
