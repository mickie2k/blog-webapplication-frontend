import React from 'react'
import BlogEditCard from './edit/blog-edit-card'
import { Blog } from '@/types/blog';
import _ from 'lodash';
import { axiosJWTInstance } from '@/utils/http';
import { toast } from 'sonner';
import axios from 'axios';

interface BlogMyProps {
    blogs: Blog[]
    setData: React.Dispatch<React.SetStateAction<Blog[]>>
}

export default function MyBlog(props:  Readonly<BlogMyProps>) {
  const { blogs,setData } = props;

  const deleteBlog = async (id:string) => {
    try {
        const response = await axiosJWTInstance.delete(`/blog/${id}`)
        if(response.status === 200){
            toast('Blog has been deleted')
            setData((prev) => prev.filter((blog) => blog.id !== id))
        }
    } catch (error) {
        if(axios.isAxiosError(error)){
           
                toast.error(`Blog not found or you don't have permission to delete it`)
            
        }else{
            toast.error('Something went wrong')
        }
        
    }
}
  return (
    <div className="grid  gap-4">
             {blogs.map((blog) => (
                <BlogEditCard blog={{
                    ...blog, title: _.unescape(blog.title), content: _.unescape(blog.content)
                }} handleDelete={deleteBlog} key={blog.id} />
            ))}
            {blogs.length === 0 && (
              <div className='col-span-3 flex justify-center items-center'>
                  <h1 className='text-muted-foreground'>No blogs available</h1>
              </div>
          )
                  }
        </div>
  )
}
