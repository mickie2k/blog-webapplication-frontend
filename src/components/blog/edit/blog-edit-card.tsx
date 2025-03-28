import React from 'react'
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import Link  from 'next/link'
import { PiArrowSquareOutLight, PiNotePencilLight } from 'react-icons/pi'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'


export default function BlogEditCard() {
    return (
        
            <Card className='gap-4'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold max-w-full text-wrap overflow-clip line-clamp-2'>Hello This Blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestiae voluptate alias, aspernatur nam fugiat ut reprehenderit similique fugit. Doloribus eveniet sequi autem esse quis, ducimus impedit hic explicabo dolorum, dicta est.</p>
                    
                </CardContent>
               
                <CardFooter className='flex-col'>
                     
                        <div className='flex gap-4 w-full justify-end'>

                        
                        <Link href="" ><Button variant="ghost"><PiArrowSquareOutLight/> Open</Button></Link>
                        <Link href="" ><Button variant="ghost"><PiNotePencilLight/> Edit</Button></Link>
                    </div>
                    
                </CardFooter>
            </Card>
       
    )
}
