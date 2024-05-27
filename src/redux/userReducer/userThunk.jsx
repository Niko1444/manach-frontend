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
export const getInfor = createAsyncThunk(
	'userReducer/getInfor',
	async (payload) => {
		try {
			const data = await userService.getInfor(payload)
			return data
		} catch (error) {
			console.log('error:', error)
		}
	},
)
export const editProfile = createAsyncThunk(
	'userReducer/editProfile',
	async (payload) => {
		try {
			const data = await userService.editProfile(payload.id, payload.infor)
			message.success('Change success')
			return data
		} catch (error) {
			console.log('error:', error)
		}
	},
)
