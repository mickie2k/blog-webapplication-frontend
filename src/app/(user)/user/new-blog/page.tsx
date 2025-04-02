"use client"
import React, { useEffect } from 'react'

import BlogForm from '@/components/blog/form/blog-form'
import { axiosJWTInstance } from '@/utils/http'
import { BlogFormValue } from '@/types/blog'
import {useRouter} from 'next/navigation'
import { toast } from 'sonner'
import { useAuth } from '@/context/auth-context'
import axios from 'axios'

export default function NewBlogPage() {

    const { isAuthenticated, loading  } = useAuth()
    const router = useRouter()
    useEffect(()=>{
       
        if(!loading && !isAuthenticated){
            router.push('/login')
        }

    },[isAuthenticated,loading,router])
    const handleSubmit = async (value : BlogFormValue) => {
      
        console.log(value)

        try {
            const res = await axiosJWTInstance.post('/blog', value)
            const data = res.data
            if(res.status === 201) {
                toast('Blog has been published',{
                    action: {
                        label: 'Result',
                        onClick: () => router.push(`/blog/${data.id}`)
                    },
                    position: 'top-center',
                })
                }else{
                    throw new Error('Failed to publish a blog')
                }
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error('Failed to publish',{
                    description: 'Something went wrong, try again',
                    position: 'top-center',
                })
            }else{
                toast.error('Something went wrong, try again',{
                            position: 'top-center',
                        })
            }
            
        }


       

    }
    return (
        <div>

            <div className='mt-12'>
                <BlogForm handleSubmit={handleSubmit} />

            </div>
            
        </div>
    )
}

