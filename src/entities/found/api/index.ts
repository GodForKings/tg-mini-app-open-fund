import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FundStatsResponse } from '../model/types'

export const apiFound = createApi({
	reducerPath: 'found',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BACKEND }),
	tagTypes: ['found'],
	endpoints: builder => ({
		fetchFound: builder.query<FundStatsResponse, void>({
			query: () => ({
				url: '/fund/stats',
				method: 'GET',
			}),
			providesTags: ['found'],
		}),
	}),
})

export const { useFetchFoundQuery } = apiFound
