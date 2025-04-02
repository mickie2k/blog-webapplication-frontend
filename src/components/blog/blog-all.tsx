
import BlogCard from './blog-card'
import { Blog } from '@/types/blog';
import _ from 'lodash'


interface BlogAllProps {
  blogs: Blog[]
}

export default async function BlogAll(props : Readonly<BlogAllProps>) {
  const { blogs } = props



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
