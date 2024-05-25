import { createSlice } from '@reduxjs/toolkit'
import { userThunk } from './userThunk'
import { userLocal } from '../../service/userLocal'

const initialState = {
	userId: userLocal.getUserId(),
	roleId: 2,
	roleName: userLocal.getRoleName(),
}

const userReducer = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		logOutAction: (state, action) => {
			state.userId = null
			state.roleName = null
			state.roleId = null

			localStorage.removeItem('token')
			userLocal.delete()
		},
	},
	extraReducers: (builder) => {
		builder.addCase(userThunk.fulfilled, (state, action) => {
			console.log('builder.addCase ~ action:', action.payload.user_id)
			userLocal.setId(action.payload.user_id)
			state.userId = action.payload.user_id
			userLocal.setRoleName(action.payload.role_id)
		})
	},
})

export const { logOutAction } = userReducer.actions

export default userReducer.reducer
