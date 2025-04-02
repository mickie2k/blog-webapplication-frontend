
import BlogCard from './blog-card'
import { API_URL } from '@/utils/constants';
import { Blog } from '@/types/blog';
import _ from 'lodash'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

export default async function BlogAll() {
  const data = await fetch(`${API_URL}/blog`,{
    cache: 'no-store',
  });
  const blogs: Blog[] = await data.json()
  if (!data.ok) {
    return (
      <Alert variant='default' className='col-span-3'>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Failed to fetch blogs</AlertTitle>
        <AlertDescription>Something went wrong, please try again</AlertDescription>
      </Alert>
    )
  }


  return (
    <div className="grid  sm:grid-cols-2  gap-4">

          {blogs.map((blog) => (
              <BlogCard blog={{ ...blog, title: _.unescape(blog.title), content: _.unescape(blog.content) }} key={blog.id} />
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
