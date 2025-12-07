'use client'

import { Progress } from '@telegram-apps/telegram-ui'
import { motion } from 'framer-motion'
import type { FC } from 'react'

interface CustomProgressProps {
	dataProgress: number
}

export const CustomProgress: FC<CustomProgressProps> = props => {
	const { dataProgress } = props

	return (
		<motion.div
			initial={{ opacity: 0, filter: 'blur(4px)' }}
			animate={{ opacity: 1, filter: 'none' }}
			transition={{ duration: 0.3, ease: 'linear', delay: 0.3 }}
			className='relative rounded-xl overflow-hidden'
		>
			<Progress value={dataProgress} style={{ height: 20 }} />
			<div className='absolute inset-0 z-2 text-center'>{dataProgress} %</div>
		</motion.div>
	)
}
