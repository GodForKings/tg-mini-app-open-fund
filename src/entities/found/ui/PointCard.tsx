'use client'

import { Card, PAGES, cn } from '@/shared'
import { Avatar, Button, Divider, Text } from '@telegram-apps/telegram-ui'
import { memo, type FC } from 'react'

interface PointCardProps {
	membersCount?: number
	purchasedCount?: number
	tonToPointsRate?: number
}

export const PointCard: FC<PointCardProps> = memo(
	({ membersCount, purchasedCount, tonToPointsRate }) => {
		return (
			<Card className={cn('border-none bg-gray_dark', 'flex flex-col gap-3.75')}>
				<div className={cn('flex justify-between items-center')}>
					<div className='flex gap-2.5'>
						<Avatar size={40} src={'/asset/mockFound.png'} />

						<div className='flex flex-col'>
							<p className='text-sm text-gray_light'>Drop Points price:</p>

							<h3 className='text-lg'>{tonToPointsRate || '-'} Ton</h3>
						</div>
					</div>

					<Button mode='gray' style={{ borderRadius: 14 }} href={PAGES.BUY} Component='a'>
						Buy
					</Button>
				</div>

				<Divider />

				<Text className='text-gray_light' style={{ fontSize: 12 }}>
					🔥 {membersCount || '-'}K members & {purchasedCount || '-'} purchased
				</Text>
			</Card>
		)
	},
)
