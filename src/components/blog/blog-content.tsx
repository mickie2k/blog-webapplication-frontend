"use client"
import { useAuth } from '@/context/auth-context';
import { Role } from '@/enum/role.enum';
import { Blog } from '@/types/blog'
import { axiosJWTInstance } from '@/utils/http';
import React, { useEffect } from 'react'
import { Button } from '../ui/button';
import axios from 'axios';
import _ from 'lodash'

interface BlogContentProps {
    // Define any props if needed
    blog : Blog  
}

export default function BlogContent(props:  Readonly<BlogContentProps> ) {
    const { blog } = props;
    const { isAuthenticated,hasRole } = useAuth()
    const [blogContent ,setBlogContent] = React.useState<string>(blog.content)
    const [hasPremium ,setHasPremium] = React.useState<boolean>(false)

    
    useEffect(()=>{

        async function fetchBlogContent() {
            try {
                const res = await axiosJWTInstance.get(`/blog/${blog.id}/content`)
                const data = {
                    content: _.unescape(res.data.content)
                }
                setBlogContent(data.content)
                setHasPremium(true)
            } catch (error) {
                if(axios.isAxiosError(error)){
                    if(error.response?.status === 403){
                        setHasPremium(false)
                    }
                }
            }
            
            
        }

        if(blog.isPremium && isAuthenticated && hasRole(Role.PREMIUM)){
           fetchBlogContent()
        }

    },[isAuthenticated,hasRole, blog.id,blog.isPremium])


  return (
    <>
        <p className='text-lg whitespace-pre-line'>{blogContent}</p>
        {(blog.isPremium && !hasPremium) &&
        <div className='pt-24 -translate-y-16 bg-linear-to-t  from-50% from-background to-background/0 flex flex-col gap-4 justify-center items-center'>
            
            <h2 className='text-2xl font-semibold'>Become a premium to read this blog</h2>
            <Button variant="default">Upgrade</Button> 
            
        </div>
    }
    </>
    
  )
}
