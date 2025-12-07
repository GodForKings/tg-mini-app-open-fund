import { apiFound, apiUser, userReducer } from '@/entities'
import { apiStat } from '@/features/statistics-browser/api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		[apiUser.reducerPath]: apiUser.reducer,
		[apiFound.reducerPath]: apiFound.reducer,
		[apiStat.reducerPath]: apiStat.reducer,
		userStore: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([apiUser.middleware, apiFound.middleware, apiStat.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
