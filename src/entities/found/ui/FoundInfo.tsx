'use client'

import { Button, Text } from '@telegram-apps/telegram-ui'
import type { FC } from 'react'

import { Card, CustomProgress, cn } from '@/shared'
import { useFetchFoundQuery } from '../api'
import { PointCard } from './PointCard'
import { Skeleton } from './Skeleton'

export const FoundInfo: FC = () => {
	const { data, isLoading, isError } = useFetchFoundQuery(undefined)

	return (
		<Card className={cn('flex flex-col gap-3.75')}>
			{isLoading || isError ? (
				<Skeleton />
			) : (
				<>
					<Text style={{ fontSize: 14 }}>💎 Total funds raised {data?.totalRaised} TON</Text>

					<CustomProgress dataProgress={data?.progress || 50} />

					<Text weight='3' style={{ fontSize: 12 }}>
						First round goal {data?.goal} TON
					</Text>

					<PointCard
						tonToPointsRate={data?.wallet.tonToPointsRate}
						membersCount={data?.membersCount}
						purchasedCount={data?.purchasedCount}
					/>
				</>
			)}

			<Button mode='filled' style={{ borderRadius: 14 }} disabled={isLoading}>
				Get drop points!
			</Button>
		</Card>
	)
}
