import { BuyPoints } from '@/entities'
import { ThemeProvider } from '@/shared'

export default function Dashboard() {
	return (
		<ThemeProvider>
			<BuyPoints />
		</ThemeProvider>
	)
}
