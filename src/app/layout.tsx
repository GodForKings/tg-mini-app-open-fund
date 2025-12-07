import type { Metadata } from 'next'

import '@fontsource/anonymous-pro/400.css'
import '@fontsource/anonymous-pro/700.css'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { StoreProvider } from './_providers/MainProvider'
import './globals.css'

export const metadata: Metadata = {
	title: 'Open Foundation',
	description: 'Telegram mini-app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	)
}
