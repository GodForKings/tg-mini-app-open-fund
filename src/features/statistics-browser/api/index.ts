import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TransactionHistoryResponse } from '../model/types'

export const apiStat = createApi({
	reducerPath: 'stat',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BACKEND }),
	tagTypes: ['transaction'],
	endpoints: builder => ({
		fetchTransactions: builder.query<TransactionHistoryResponse[], number>({
			query: limit => ({
				url: '/transaction-history',
				method: 'GET',
				params: {
					limit: limit,
				},
			}),
			providesTags: ['transaction'],
		}),
	}),
})

export const { useFetchTransactionsQuery } = apiStat
