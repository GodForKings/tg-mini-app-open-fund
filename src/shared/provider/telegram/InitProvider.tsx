'use client'
import type { CSSProperties, FC } from 'react'

import { cn } from '@/shared'
import { backButton, init, isTMA } from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'

interface InitProviderProps {
	children: React.ReactNode
}

export const InitProvider: FC<InitProviderProps> = props => {
	const { children } = props

	const isTelegramApp = isTMA()

	if (isTelegramApp) {
		init()

		backButton.mount()

		return (
			<AppRoot
				className={cn('min-h-screen bg-background text-foreground', 'py-5 px-8')}
				style={
					{
						'--tgui--font-family': "'Anonymous Pro', monospace",
					} as CSSProperties
				}
			>
				{children}
			</AppRoot>
		)
	}

	return (
		<div
			className={cn(
				'h-screen bg-background text-foreground text-2xl',
				'grid place-content-center gap-4',
			)}
		>
			To work correctly, launch the application in Telegram.
		</div>
	)
}
