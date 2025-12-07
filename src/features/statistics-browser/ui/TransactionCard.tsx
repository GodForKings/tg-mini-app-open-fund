import { Card, cn } from '@/shared'
import { Text } from '@telegram-apps/telegram-ui'
import { FC } from 'react'
import { TransactionHistoryResponse } from '../model/types'

interface TransactionCardProps {
	data: Partial<TransactionHistoryResponse>
}

export const TransactionCard: FC<TransactionCardProps> = props => {
	const { data } = props
	return (
		<Card className={cn('flex justify-between items-center gap-3', 'border-none bg-black/50')}>
			<Text className='truncate max-w-25'>🔥 {data.userId}</Text>

			<Text>
				{Number(data.amount)} {data.currency}
			</Text>
		</Card>
	)
}
