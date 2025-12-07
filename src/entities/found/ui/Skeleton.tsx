import type { FC } from 'react'

export const Skeleton: FC = () => {
	return <div className='h-76 w-full bg-sky-500 animate-pulse rounded-xl transition'></div>
}
