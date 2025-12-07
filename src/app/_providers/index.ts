'use client'
import dynamic from 'next/dynamic'

export const ClientProvider = dynamic(() => import('@/shared').then(m => m.InitProvider), {
	ssr: false,
})
