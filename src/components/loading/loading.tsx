import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Loading() {
    return (
        <div className="w-full h-full fixed z-[100] bg-background">
            <LoaderCircle className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 animate-spin w-12 h-12 text-input" />
        </div>
    )
}
