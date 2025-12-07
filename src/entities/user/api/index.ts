import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserResponse } from '../model/types'

export const apiUser = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BACKEND }),
	tagTypes: ['userData'],
	endpoints: build => ({
		fetchUserData: build.query<UserResponse, number>({
			query: id => ({
				url: `/users/${id}`,
				cache: 'default',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
			}),
		}),
	}),
})

export const { useFetchUserDataQuery } = apiUser
