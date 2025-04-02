import React from 'react'
import { Separator } from "@/components/ui/separator"
import { API_URL } from '@/utils/constants';
import { Blog } from '@/types/blog';
import BlogContent from '@/components/blog/blog-content';
import _ from 'lodash';
import { PiStarFourFill } from 'react-icons/pi';
import { notFound } from 'next/navigation'
import CommentSection from '@/components/blog/comment/comment-section';
export default async function BlogPage({params}: Readonly<{params: Promise<{ id: number }>}>) {
    const { id } = await params;
    const data = await fetch(`${API_URL}/blog/${id}`,{
        cache: 'no-store',
    });
    const blog: Blog = await data.json()

    if(!data.ok){
        return notFound()
    }

    blog.title = _.unescape(blog.title)
    blog.content = _.unescape(blog.content)

    
  return (
    <div className='mt-12'>
        <div className='max-w-5xl m-auto gap-6 flex-col flex'>
            <section>
                <span className='text-muted-foreground text-sm flex gap-2  items-center'>{blog.authorName} {blog.isPremium &&<PiStarFourFill className='w-3 text-yellow-500' />}</span>
                
                <h1 className='text-6xl font-bold leading-tight'>{blog.title}
                </h1>
            </section>
            <section>
               
                <div>
                   
                    <BlogContent blog={blog}/>
                    
                    
                </div>
            </section>
            <Separator />

            <CommentSection blog={blog}/>
        </div>
    </div>
  )
}
