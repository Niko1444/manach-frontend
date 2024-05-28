import { message } from 'antd'

export const cartLocal = {
	set: () => {
		localStorage.setItem('cart', JSON.stringify([]))
	},

	get: () => {
		let json = localStorage.getItem('cart')
		if (json) {
			return JSON.parse(json)
		} else {
			return []
		}
	},

	delete: () => {
		localStorage.removeItem('cart')
	},

	// Add an item to the cart in localStorage
	addToCart: (data) => {
		let json = localStorage.getItem('cart')
		let cart = json ? JSON.parse(json) : []

		const existingItemIndex = cart.findIndex(
			(item) => item.product_id === data.product_id,
		)

		if (existingItemIndex == -1) {
			cart.push(data)
		}

		localStorage.setItem('cart', JSON.stringify(cart))
		message.success('Add to cart')
	},

	itemQanInCart: (id) => {
		let json = localStorage.getItem('cart')
		let cart = json ? JSON.parse(json) : []

		const existingItem = cart.find((item) => item.product_id === id)

		if (existingItem) {
			return existingItem.quantity
		} else {
			return -1
		}
	},

	changeQuantity: (id, change) => {
		let json = localStorage.getItem('cart')
		let cart = json ? JSON.parse(json) : []

		const itemIndex = cart.findIndex((item) => item.product_id === id)

		if (itemIndex !== -1) {
			cart[itemIndex].quantity += change
			if (cart[itemIndex].quantity <= 0) {
				cart.splice(itemIndex, 1)
			}
		}

		localStorage.setItem('cart', JSON.stringify(cart))
		return cart
	},
}
