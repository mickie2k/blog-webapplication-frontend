"use client"
import React from 'react'
import { Separator } from "@/components/ui/separator"
import CommentForm from '@/components/blog/comment/comment-form'
import CommentCard from '@/components/blog/comment/comment-card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import BlogForm from '@/components/blog/form/blog-form'

export default function NewBlogPage() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const content = formData.get('content')
        console.log({ title, content })
    }
    return (
        <div>

            <div className='mt-12'>
                <BlogForm handleSubmit={handleSubmit} />

            </div>
            <div className='fixed bottom-0 flex py-4 justify-end px-4 w-full border-t border-border'>
                
                <Button className=''>Publish</Button>
            </div>
        </div>
    )
}

