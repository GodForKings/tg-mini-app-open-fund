import { Card, cn } from '@/shared'
import { FC } from 'react'

interface BoardsListProps {
	children: React.ReactNode
	className?: string
}
export const BoardsList: FC<BoardsListProps> = props => {
	const { children, className } = props

	return (
		<Card className={cn('flex flex-col gap-3', 'border-border/30', className)}>{children}</Card>
	)
}
