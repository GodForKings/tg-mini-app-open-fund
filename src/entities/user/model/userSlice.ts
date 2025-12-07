import { apiUser } from '@/entities'
import type { IUser } from '@/shared'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
	data: IUser | null
	isLoading: boolean
	error: string | null
}

const initialState: UserState = {
	data: null,
	isLoading: false,
	error: null,
}

export const userSlice = createSlice({
	name: 'userStore',
	initialState,
	reducers: {
		resetUser() {
			return initialState
		},
	},
	extraReducers: builder => {
		builder
			.addMatcher(apiUser.endpoints.fetchUserData.matchPending, state => {
				state.isLoading = true
				state.error = null
			})

			.addMatcher(
				apiUser.endpoints.fetchUserData.matchFulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.isLoading = false
					state.error = null
					state.data = action.payload
				},
			)

			.addMatcher(apiUser.endpoints.fetchUserData.matchRejected, (state, action) => {
				state.isLoading = false
				state.error = action.error?.message ?? 'Unknown error'
			})
	},
})

export const { resetUser } = userSlice.actions

export const userReducer = userSlice.reducer
