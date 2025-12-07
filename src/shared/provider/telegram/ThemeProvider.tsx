'use client'

import { THEME_PARAMS } from '@/shared'
import { backButton, useLaunchParams } from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'
import { useEffect, type FC } from 'react'

interface ThemeProviderProps {
	children: React.ReactNode
	back?: boolean
}
export const ThemeProvider: FC<ThemeProviderProps> = props => {
	const { children, back = true } = props

	const launchParams = useLaunchParams()

	launchParams.tgWebAppThemeParams = {
		...launchParams.tgWebAppThemeParams,
		...THEME_PARAMS,
	}

	const navigator = useRouter()

	useEffect(() => {
		if (back) {
			backButton.show()
		} else {
			backButton.hide()
		}
	}, [back])

	useEffect(() => {
		return backButton.onClick(() => {
			navigator.back()
		})
	}, [navigator])

	return <>{children}</>
}
