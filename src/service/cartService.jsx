import { http } from './urlConfig'

export const cartService = {
	postOrder: (id, data) => {
		let url = `/user/${id}/checkout`
		console.log('data:', data)
		console.log('url:', url)
		return http.post(url, data)
	},
}
