'use client'

import { apiFound, apiUser } from '@/entities'
import { PAGES, cn } from '@/shared'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import { Button, Text } from '@telegram-apps/telegram-ui'
import { redirect } from 'next/navigation'
import { useEffect, useState, type FC } from 'react'
import { minPoints, selectData, step } from '../lib/found.data'
import { AmountSelector } from './AmountSelector'
import { BalanceDisplay } from './BalanceDisplay'
import { CurrencySelector } from './CurrencySelector'
import { Skeleton } from './Skeleton'

export const BuyPoints: FC = () => {
	const [purchaseAmount, setPurchaseAmount] = useState<number>(0)

	const launchData = useLaunchParams()
	const userId = 345678901 // launchData.tgWebAppData?.user?.id

	const {
		data: userData,
		isLoading: userLoading,
		error: userError,
	} = apiUser.useFetchUserDataQuery(userId)
	const {
		data: foundData,
		isLoading: foundLoading,
		error: foundError,
	} = apiFound.useFetchFoundQuery(undefined)

	useEffect(() => {
		if (userData?.points && foundData?.wallet.tonToPointsRate && !userLoading && !foundLoading) {
			const initialAmount = userData.points / foundData.wallet.tonToPointsRate

			setPurchaseAmount(
				initialAmount >= minPoints / foundData.wallet.tonToPointsRate ? initialAmount : 0,
			)
		}
	}, [userData, foundData, userLoading, foundLoading])

	if (userLoading || foundLoading) {
		return <Skeleton />
	}

	if (foundError || userError) redirect(PAGES.DASHBOARD)

	return (
		<form className={cn('relative w-full min-h-[80dvh]', 'flex flex-col justify-center gap-5')}>
			<div className='flex flex-col gap-2'>
				<AmountSelector
					step={step}
					min={minPoints}
					value={purchaseAmount}
					onChange={setPurchaseAmount}
				/>

				<Text className='text-gray_light' style={{ fontSize: 14 }}>
					You must buy at least 100 points
				</Text>
			</div>

			<div className='flex flex-col gap-2'>
				<Text style={{ fontSize: 14 }}>Set expiration date and time</Text>

				<div className={cn('relative w-full text-gray_light', 'flex justify-between gap-3')}>
					<CurrencySelector options={selectData} value={selectData[0]} onChange={() => {}} />

					<BalanceDisplay balance={userData?.points || 0} />
				</div>
			</div>

			<Button mode='filled' style={{ borderRadius: 14 }} disabled={userLoading || foundLoading}>
				Buy
			</Button>
		</form>
	)
}
