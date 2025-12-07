import { cn, numberFormation } from '@/shared'
import { type FC } from 'react'

interface BalanceDisplayProps {
	balance: number
}

export const BalanceDisplay: FC<BalanceDisplayProps> = props => {
	const { balance } = props

	return (
		<div className={cn('bg-full_dark p-3 pl-6 rounded-xl flex-2', 'grid place-content-start')}>
			{numberFormation(balance)}
		</div>
	)
}
