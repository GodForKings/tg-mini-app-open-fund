import { IUser } from '@/shared'

type CurrencyList = 'TON'

export interface IListNav {
	id: number
	title: string
}

export interface TransactionHistoryResponse {
	id: string

	userId: string

	amount: number

	currency: CurrencyList

	metadata: string

	user: IUser
}
