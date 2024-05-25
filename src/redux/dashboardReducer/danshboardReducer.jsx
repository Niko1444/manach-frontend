import { createSlice } from '@reduxjs/toolkit'
import { dashboardThunk } from './dashboardThunk'

const initialState = {
	data: [],
}

const danshboardReducer = createSlice({
	name: 'danshboardReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(dashboardThunk.fulfilled, (state, action) => {
			state.data = action.payload.data
		})
	},
})

export const {} = danshboardReducer.actions

export default danshboardReducer.reducer
