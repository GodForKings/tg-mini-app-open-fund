import { Button } from '@telegram-apps/telegram-ui'
import { type FC } from 'react'

export const CTA: FC = () => {
	return (
		<div className='flex flex-col gap-2.5 text-gray_light'>
			Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3.
			<Button mode='gray' style={{ borderRadius: 14 }}>
				Read More
			</Button>
		</div>
	)
}
