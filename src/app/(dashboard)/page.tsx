import { FoundInfo, UserHeader } from '@/entities'
import { StatisticsBrowser } from '@/features'
import { ThemeProvider, cn } from '@/shared'
import { CTA, TotalRaised } from '@/widgets'

export default function Dashboard() {
	return (
		<ThemeProvider back={false}>
			<main className={cn('flex flex-col gap-5')}>
				<UserHeader />

				<CTA />

				<FoundInfo />

				<StatisticsBrowser />

				<TotalRaised />
			</main>
		</ThemeProvider>
	)
}
