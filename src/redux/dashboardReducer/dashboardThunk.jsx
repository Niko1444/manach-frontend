import { createAsyncThunk } from '@reduxjs/toolkit'
import { dashboardService } from '../../service/dashboardService'

export const dashboardThunk = createAsyncThunk('dashboardThunk', async () => {
	const data = await dashboardService.getDashBoard()
	return data.data
})
