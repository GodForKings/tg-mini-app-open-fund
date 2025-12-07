'use client'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { cn } from '..'

interface CardProps {
	children: React.ReactNode
	className?: string
}

export const Card: FC<CardProps> = props => {
	const { children, className } = props

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: 'linear' }}
			data-slot='card'
			className={cn('relative p-3', 'border border-border rounded-xl', className)}
		>
			{children}
		</motion.div>
	)
}
