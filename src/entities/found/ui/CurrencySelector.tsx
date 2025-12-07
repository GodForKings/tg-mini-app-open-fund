import { cn } from '@/shared'
import { motion } from 'framer-motion'
import type { FC } from 'react'

interface CurrencySelectorProps {
	options: string[]
	value: string
	onChange: (newValue: string) => void
}

export const CurrencySelector: FC<CurrencySelectorProps> = props => {
	const { options, value, onChange } = props

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'linear' }}
			className={cn('bg-full_dark p-3 rounded-xl flex-1', 'grid place-content-center')}
		>
			<select name='currency' value={value} onChange={e => onChange(e.target.value)}>
				{options.map(el => (
					<option key={el} className='bg-background text-foreground p-1'>
						{el}
					</option>
				))}
			</select>
		</motion.div>
	)
}
