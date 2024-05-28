import { createSlice } from '@reduxjs/toolkit'
import { editProfile, getInfor, postSignUp, userThunk } from './userThunk'
import { userLocal } from '../../service/userLocal'

const initialState = {
	userId: userLocal.getUserId(),
	roleId: 2,
	roleName: userLocal.getRoleName(),
	inforUser: [],
}

const userReducer = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		logOutAction: (state) => {
			state.userId = null
			state.roleName = null
			state.roleId = null

			localStorage.removeItem('token')
			userLocal.delete()
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userThunk.fulfilled, (state, action) => {
				userLocal.setId(action.payload.user_id)
				userLocal.setRoleName(action.payload.role_id)
				state.userId = action.payload.user_id
				state.roleId = action.payload.role_id
				state.roleName = userLocal.getRoleName()
			})
			.addCase(getInfor.fulfilled, (state, action) => {
				let data = action.payload.data.content
				userLocal.setInfor(data)
				state.inforUser = data
			})
			.addCase(editProfile.fulfilled, (state, action) => {
				console.log('.addCase ~ action:', action.payload.data.content)
				const data = action.payload.data.content
				state.inforUser = data
			})
			.addCase(postSignUp.fulfilled, (state, action) => {
				console.log(action.payload)
			})
	},
})

export const { logOutAction } = userReducer.actions

export default userReducer.reducer
