import { createSlice } from '@reduxjs/toolkit'
import { addProduct, delProductThunk, storeThunk } from './storeAThunk'

const initialState = {
	listProduct: [],
}

const storeAReducer = createSlice({
	name: 'storeAReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(storeThunk.fulfilled, (state, action) => {
				state.listProduct = action.payload
			})
			.addCase(delProductThunk.fulfilled, (state, action) => {
				state.listProduct = state.listProduct.filter(
					(item) => item.id !== action.payload.product_id,
				)
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				// state.listProduct.push(action.payload)
			})
	},
})

// eslint-disable-next-line no-empty-pattern
export const {} = storeAReducer.actions

export default storeAReducer.reducer
