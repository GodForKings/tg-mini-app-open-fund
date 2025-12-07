'use client'

import { Card, cn } from '@/shared'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import { Avatar, Info } from '@telegram-apps/telegram-ui'
import { FC } from 'react'
import { useFetchUserDataQuery } from '../api'
import { SkeletonHeader } from './SkeletonHeader'

export const UserHeader: FC = () => {
	const launchParams = useLaunchParams()

	const { data, isLoading, isError } = useFetchUserDataQuery(345678901) // для тестов

	return isLoading || isError ? (
		<SkeletonHeader />
	) : (
		<section className={cn('flex justify-between items-center')}>
			<div className='flex justify-center items-center gap-3'>
				<Avatar
					acronym='User'
					size={48}
					src={data?.photoUrl || launchParams.tgWebAppData?.user?.photo_url}
				/>

				<Info
					subtitle='Your rank #2932'
					type='text'
					className='flex flex-col justify-center items-start'
				>
					{data?.username || '-'}
				</Info>
			</div>

			<Card className={cn('flex justify-center items-center', 'text-sm p-2 w-23')}>
				{data?.points || '-'}

				<p
					className={cn('absolute top-5/6 bg-background w-14 rounded-full', 'text-center text-xs')}
				>
					Points
				</p>
			</Card>
		</section>
	)
}
