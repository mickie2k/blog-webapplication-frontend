import { BlogComment } from '@/types/blog'
import React from 'react'

interface CommentCardProps {
  comment : BlogComment
}

export default function CommentCard(props:  Readonly<CommentCardProps>) {
  const { comment } = props

  return (
    <div className='flex flex-col gap-1'>
        <h6 className='text-sm font-medium'>{comment.authorName}</h6>
        <p className='text-sm'>{comment.content}</p>
    </div>
  )
}
