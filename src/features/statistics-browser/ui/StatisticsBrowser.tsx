'use client'

import { PAGINATION, cn } from '@/shared'
import { Button } from '@telegram-apps/telegram-ui'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type CSSProperties, type FC } from 'react'
import { useFetchTransactionsQuery } from '../api'
import { ListNav } from '../lib/mock.data'
import { BoardsList } from './BoardsList'
import { LeaderCard } from './LeaderCard'
import { TransactionCard } from './TransactionCard'

export const StatisticsBrowser: FC = () => {
	const [activeStat, setActiveStat] = useState<number>(0)

	const { data, isLoading } = useFetchTransactionsQuery(PAGINATION.DEFAULT_LIMIT, {
		pollingInterval: 3000,
	})

	const views: Record<number, React.ReactNode> = {
		0: (
			<BoardsList>
				{data?.map(user => (
					<LeaderCard {...user} key={user.id} />
				))}
			</BoardsList>
		),

		1: (
			<BoardsList className='gap-2.5 border-none p-0'>
				{data?.map(tx => (
					<TransactionCard
						key={tx.id}
						data={{
							currency: tx.currency,
							amount: tx.amount,
							userId: tx.id,
						}}
					/>
				))}
			</BoardsList>
		),

		2: <BoardsList className='text-center'>TOP users Coming Soon</BoardsList>,
	}

	return (
		<div className={cn('flex flex-col gap-2.5', 'relative max-h-screen overflow-auto')}>
			<div
				className={cn('flex gap-2', 'sticky inset-0 z-2 bg-background pb-1')}
				style={
					{
						'--tgui--font-family': 'sans-serif',
						'--tgui--font_weight--accent2': 100,
					} as CSSProperties
				}
			>
				{ListNav.map(item => (
					<Button
						key={item.id}
						disabled={isLoading}
						className={cn(activeStat === item.id && 'text-gray_dark')}
						style={{ borderRadius: 10, height: 30 }}
						mode={activeStat === item.id ? 'white' : 'gray'}
						onClick={() => setActiveStat(item.id)}
					>
						{item.title}
					</Button>
				))}
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={activeStat}
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, filter: 'blur(4px)' }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
				>
					{views[activeStat]}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
