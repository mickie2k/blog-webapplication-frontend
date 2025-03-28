import React from 'react'
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from '../ui/card'
import Link  from 'next/link'

export default function BlogCard() {
    return (
        <Link href="/blog/1">
            <Card className='gap-4'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold max-w-full text-wrap overflow-clip line-clamp-2'>Hello This Blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestiae voluptate alias, aspernatur nam fugiat ut reprehenderit similique fugit. Doloribus eveniet sequi autem esse quis, ducimus impedit hic explicabo dolorum, dicta est.</p>
                </CardContent>
                <CardFooter>
                    <CardDescription>Mickie2k</CardDescription>
                </CardFooter>
            </Card>
        </Link>
    )
}
