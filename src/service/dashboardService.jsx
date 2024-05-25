import { http } from './urlConfig'

export const dashboardService = {
	getDashBoard: () => {
		let url = '/dashboard'
		return http.get(url)
	},
}
