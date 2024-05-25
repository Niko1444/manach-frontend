import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'
import { userService } from '../../service/userService'

export const userThunk = createAsyncThunk(
	'userReducer/loginThunk',
	async (payload) => {
		try {
			const data = await userService.postLogin(payload)
			message.success('Login succes')

			return data.data.content
		} catch (error) {
			message.success('Login fail')
		}
	},
)
