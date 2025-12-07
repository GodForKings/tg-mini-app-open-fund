'use client'
import type { FC } from 'react'

import { Provider } from 'react-redux'
import { store } from '../_store'
import { ClientProvider } from './index'

interface StoreProviderProps {
	children: React.ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children } = props

	return (
		<ClientProvider>
			<Provider store={store}>{children}</Provider>
		</ClientProvider>
	)
}
