import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer/userReducer'
import danshboardReducer from './dashboardReducer/danshboardReducer'
import storeAReducer from './storeAReducer/storeAReducer'
import loadingReducer from './loadingReducer/loadingReducer'

export const store = configureStore({
	reducer: {
		userReducer: userReducer,
		dashboardReducer: danshboardReducer,
		storeAReducer: storeAReducer,
		loadingReducer: loadingReducer,
	},
})
