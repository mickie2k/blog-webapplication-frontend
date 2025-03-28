import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FiLock } from 'react-icons/fi'
import { GoLock } from 'react-icons/go'
import { LuLock } from 'react-icons/lu'
import { PiLockSimpleLight } from 'react-icons/pi'

export default function UnauthorizedPage() {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-6'>
        <GoLock    className='h-14 w-14' />
        <h3 className='text-3xl font-bold '>Unauthorized Access</h3>
        <p className='text-center text-muted-foreground'>You do not have the necessary permissions to access this resource. <br /> Please contact your administrator for assistance.</p>
        <Link href="/"><Button size="lg"> Go to Homepage </Button></Link>
    </div>
  )
}
