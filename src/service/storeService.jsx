import { http } from './urlConfig'

export const storeService = {
	getListProduct: () => {
		let url = '/store/all-product'
		return http.get(url)
	},
	delProduct: (data) => {
		let url = '/store/all-product/remove-product'
		return http.put(url, data)
	},
	addProduct: (data) => {
		let url = '/store/all-product/add-product'
		return http.post(url, data)
	},
}
