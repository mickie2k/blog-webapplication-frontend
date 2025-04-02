"use client"
import React, { useEffect } from 'react'


import BlogForm from '@/components/blog/form/blog-form'
import { useParams ,useRouter} from 'next/navigation'
import { axiosJWTInstance } from '@/utils/http'
import { Blog, BlogFormValue } from '@/types/blog'
import _ from 'lodash'
import { toast } from "sonner"
import axios from 'axios'

export default function EditBlogPage() {
    const router = useRouter()
    const params = useParams<{ id: string }>()
    const [blog, setBlog] = React.useState<Blog>()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axiosJWTInstance(`/blog/me/${params.id}`)
                const data = res.data
                data.title = _.unescape(data.title)
                data.content = _.unescape(data.content)
                setBlog(data)
            } catch (error) {
                console.log(error)
                router.push('/unauthorized')
            }
            
        }
        fetchBlog()
    },[params.id,router])

    const handleSubmit = async (value : BlogFormValue) => {
        const { title, content , isPremium} = value


        try {
            const res = await axiosJWTInstance.patch(`/blog/${blog?.id}`, { title, content ,isPremium})
            if(res.status === 200) {
            toast('Blog has been updated',{
                action: {
                    label: 'Result',
                    onClick: () => router.push(`/blog/${blog?.id}`)
                },
                position: 'top-center',
            })
            }else{
                throw new Error('Failed to update blog')
            }
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error('Failed to update',{
                description: 'Something went wrong, try again',
                position: 'top-center',
                })
            }
            
        }
       

    }

    return (
        <div>

            <div className='mt-12'>
                
                <BlogForm handleSubmit={handleSubmit} value={
                    {
                        title: blog?.title,
                        content: blog?.content,
                        isPremium: blog?.isPremium,
                        
                    }
                }  />

            </div>
            {/* <div className='fixed bottom-0 flex py-4 justify-end px-4 w-full border-t border-border'>
                
                <Button className=''>Publish</Button>
            </div> */}
        </div>
    )
}

