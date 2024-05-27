import { http } from './urlConfig'

export const userService = {
	postLogin: (data) => {
		let url = '/auth/login'
		return http.post(url, data)
	},

	getInfor: (data, roleName) => {
		let url = `/${roleName}/${data}`
		return http.get(url)
	},
}
