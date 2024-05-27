import { createAsyncThunk } from '@reduxjs/toolkit'
import { storeService } from '../../service/storeService'
import { message } from 'antd'

export const storeThunk = createAsyncThunk('storeReducer/allList', async () => {
	try {
		const data = await storeService.getListProduct()
		console.log('data:', data.data)
		return data.data.content
	} catch (error) {
		console.log('error:', error)
	}
})
export const delProductThunk = createAsyncThunk(
	'storeReducer/deleteProduct',
	async (payload) => {
		try {
			await storeService.delProduct(payload)
			console.log('payload:', payload.product_id)
			message.success('delete success')
			return payload.product_id
		} catch (error) {
			console.log('error:', error)
		}
	},
)
export const addProduct = createAsyncThunk(
	'storeReducer/addProduct',
	async (payload) => {
		console.log('payload:', payload)
		try {
			await storeService.addProduct(payload)
			message.success('add success')
			return payload
		} catch (error) {
			console.log('error:', error)
		}
	},
)
