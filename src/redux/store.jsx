import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer/userReducer'
import danshboardReducer from './dashboardReducer/danshboardReducer'

export const store = configureStore({
	reducer: {
		userReducer: userReducer,
		dashboardReducer: danshboardReducer,
	},
})
