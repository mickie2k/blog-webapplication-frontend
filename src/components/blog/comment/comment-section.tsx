"use client"
import React from 'react'
import CommentForm from './comment-form'
import CommentCard from './comment-card'
import { Blog, BlogComment } from '@/types/blog'
import { axiosJWTInstance } from '@/utils/http';
import axios from 'axios';
import { toast } from 'sonner';
import { useAuth } from '@/context/auth-context'

interface CommentSectionProps {
    blog : Blog
}

export default function CommentSection(props:  Readonly<CommentSectionProps>) {
    const { user } = useAuth()
    
    const { blog } = props
    const [comments, setComments] = React.useState<BlogComment[] | undefined>(blog.comments)

    const commentPost = async (comment: string)=>{
  
        try {
            const res = await axiosJWTInstance.post('/comment', {
                content: comment,
                blogid: blog.id
            })
            if(res.status === 201){
                console.log(res.data)
                const newComment: BlogComment = {...res.data, authorName: user?.username}
                setComments((prev) => [newComment,...(prev || [])])
                
            }else{
                toast.error('Failed to post comment')
            }

        } catch (error) {
            if(axios.isAxiosError(error)) {
                if(error.response?.status === 403){
                    // Handle forbidden
                }else if(error.response?.status === 404){
                    // Handle not found
                }else{
                    // Handle other errors
                    toast.error('Failed to post comment')
                }
            }
            console.log(error)
        }
    }
  return (
    <section className='flex flex-col gap-4'>
                    <CommentForm handleSubmit={commentPost}/>
                
                    <span className='text-sm font-semibold '>{comments?.length} comments</span>
                    <div className='flex flex-col gap-6'>
                        {comments?.map((comment) => 
                            <CommentCard comment={comment} key={comment.id}/>
                        )}

                    </div>
            </section>
  )
}
