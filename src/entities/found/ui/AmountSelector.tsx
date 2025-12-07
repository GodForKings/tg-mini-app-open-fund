import { cn, numberFormation } from '@/shared'
import { Title } from '@telegram-apps/telegram-ui'
import { motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import type { FC, MouseEvent } from 'react'

interface AmountSelectorProps {
	value: number
	onChange: (newValue: number) => void
	min: number
	step: number
}

export const AmountSelector: FC<AmountSelectorProps> = props => {
	const { value, onChange, min, step } = props

	const handleIncrement = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		onChange(value + step)
	}
	const handleDecrement = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (value - step >= min) onChange(value - step)
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'linear' }}
			className={cn('bg-full_dark p-3 rounded-xl', 'flex justify-center items-center gap-4')}
		>
			<button
				className={cn('bg-gray_light size-6 rounded-full', 'flex items-center justify-center')}
				onClick={handleDecrement}
				disabled={value <= min}
			>
				<Minus className='text-full_dark size-5' />
			</button>

			<Title level='1'>{numberFormation(value)}</Title>

			<button
				className={cn('bg-gray_light size-6 rounded-full', 'flex items-center justify-center')}
				onClick={handleIncrement}
			>
				<Plus className='text-full_dark size-5' />
			</button>
		</motion.div>
	)
}
