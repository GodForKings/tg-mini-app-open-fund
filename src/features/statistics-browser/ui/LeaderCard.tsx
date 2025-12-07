import { cn } from '@/shared'
import { Info, Text } from '@telegram-apps/telegram-ui'
import Image from 'next/image'
import type { FC } from 'react'
import type { TransactionHistoryResponse } from '../model/types'

export const LeaderCard: FC<TransactionHistoryResponse> = props => {
	const { id, userId, amount, currency, metadata, user } = props

	return (
		<div className={cn('flex justify-between items-center gap-3')}>
			<Image
				src={'/asset/userPlaceholder.png'}
				width={60}
				height={60}
				alt='user image'
				className='rounded-full'
			/>

			<Info
				subtitle={`${Number(amount)} ${currency}`}
				type='text'
				className='flex flex-col items-start flex-1'
			>
				{user.username}
			</Info>

			<Text weight='3' className='text-gray_light'>
				#{user.points}
			</Text>
		</div>
	)
}
