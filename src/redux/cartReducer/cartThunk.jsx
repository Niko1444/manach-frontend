import { createAsyncThunk } from '@reduxjs/toolkit'
import { cartService } from '../../service/cartService'
import { message } from 'antd'

export const cartThunk = createAsyncThunk(
	'cartReducer/cartThunk',
	async (payload) => {
		try {
			let data = await cartService.postOrder(
				payload.orderList,
				payload.supplierID,
				payload.roleName,
			)
			message.success('build success')

			return data
		} catch (error) {
			console.log('error:', error)
		}
	},
)
export const postOrder = createAsyncThunk(
	'cartReducer/postOrder',
	async (payload) => {
		try {
			console.log('payload:', payload.user_id)
			const data = await cartService.postOrder(payload.user_id, payload.data)
			message.success('Order success')
			return data
		} catch (error) {
			console.log('error:', error)
		}
	},
)
