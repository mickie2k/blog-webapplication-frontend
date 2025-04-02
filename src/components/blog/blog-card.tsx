import React from 'react'
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from '../ui/card'
import Link  from 'next/link'
import { Blog } from '@/types/blog'
import { PiStarFourFill } from "react-icons/pi";

interface BlogCardProps {
    blog : Blog
}

export default function BlogCard(props :  Readonly<BlogCardProps>) {
    return (
        <Link href={`/blog/${props.blog.id}`} >
            <Card className='gap-4 h-full'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold max-w-full text-wrap overflow-clip line-clamp-2'>{props.blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='line-clamp-4'>{props.blog.content}</p>
                </CardContent>
                <CardFooter className='gap-2 mt-auto'>
                    <CardDescription>{props.blog.authorName}</CardDescription>
                    {props.blog.isPremium &&<PiStarFourFill className='w-3 text-yellow-500' />}
                </CardFooter>
            </Card>
        </Link>
    )
}
