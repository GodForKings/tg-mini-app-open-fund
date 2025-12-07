import { Card, CustomProgress, cn } from '@/shared'
import { Button, Caption, Text } from '@telegram-apps/telegram-ui'
import type { FC } from 'react'

export const TotalRaised: FC = () => {
	return (
		<Card className={cn('flex flex-col gap-3.75')}>
			<Text style={{ fontSize: 14 }}>💎 Total Raised $1,703,583.93</Text>

			<CustomProgress dataProgress={13.5} />

			<Button mode='gray' style={{ borderRadius: 14 }}>
				Earn $UN
			</Button>

			<Caption
				level='1'
				style={{ fontFamily: 'sans-serif' }}
				className='text-gray_light tracking-wide'
			>
				Every time your friend receives a reward, 10% of their reward will also be paid to you. In
				addition, 2% of your friend's friends' rewards will also be paid to you!
			</Caption>
		</Card>
	)
}
