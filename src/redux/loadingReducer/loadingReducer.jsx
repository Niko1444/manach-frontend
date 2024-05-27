import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: true,
}

const loadingReducer = createSlice({
	name: 'loadingReducer',
	initialState,
	reducers: {
		turnOnLoading: (state) => {
			state.isLoading = true
		},
		turnOffLoading: (state) => {
			state.isLoading = false
		},
	},
})

export const { turnOnLoading, turnOffLoading } = loadingReducer.actions

export default loadingReducer.reducer
