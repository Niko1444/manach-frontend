import { createAsyncThunk } from '@reduxjs/toolkit'
import { dashboardService } from '../../service/dashboardService'
import { message } from 'antd'

export const dashboardThunk = createAsyncThunk('dashboardThunk', async () => {
	const data = await dashboardService.getDashBoard()
	console.log('dashboardThunk ~ data:', data)
	message.success('load success')
	return data.data
})
