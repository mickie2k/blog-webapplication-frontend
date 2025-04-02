import React from 'react'
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import Link  from 'next/link'
import { PiArrowSquareOutLight, PiNotePencilLight, PiStarFourFill } from 'react-icons/pi'
import { Button } from '@/components/ui/button'
import { Blog } from '@/types/blog'
import DeleteButton from '@/components/ui/delete-button'

interface BlogCardProps {
    blog : Blog
    handleDelete : (id:string) => void
}


export default function BlogEditCard(props :  Readonly<BlogCardProps>) {
    const { blog , handleDelete } = props;



    return (
        
            <Card className='gap-4'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold max-w-full text-wrap overflow-clip line-clamp-2'>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='line-clamp-4'>{blog.content}</p>
                    
                </CardContent>
               
                <CardFooter className='flex-col'>
                     
                       
                        <div className='flex gap-4 w-full justify-end items-center'>
                       
                       
                            {blog.isPremium &&<PiStarFourFill className='w-3 text-yellow-500' />}
                            <Link href={`blog/${blog.id}`} ><Button variant="ghost"><PiArrowSquareOutLight/> Open</Button></Link>
                            <Link href={`user/edit-blog/${blog.id}`} ><Button variant="ghost"><PiNotePencilLight/> Edit</Button></Link>
                            <DeleteButton handleOnClick={()=>{handleDelete(blog.id)}}/>
                       
                    </div>
                    
                </CardFooter>
            </Card>
       
    )
}
