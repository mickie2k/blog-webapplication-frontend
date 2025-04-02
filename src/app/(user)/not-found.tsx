import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center absolute top-0 h-screen w-screen gap-6'>
     
     <h3 className='text-3xl font-bold flex gap-4'>404 <Separator orientation='vertical' className='bg-white'/> Not Found</h3>
        <p className='text-center text-muted-foreground'>Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
        <Link href="/"><Button size="lg"> Go to Homepage </Button></Link>
    </div>
  )
}