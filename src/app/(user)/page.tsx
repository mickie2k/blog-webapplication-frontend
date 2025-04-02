

import BlogAll from "@/components/blog/blog-all";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Blog } from "@/types/blog";
import { API_URL } from "@/utils/constants";
import { AlertCircle } from "lucide-react";



export default async function Home() {
    const data = await fetch(`${API_URL}/blog`,{
      cache: 'no-store',
    });
    
    if (!data.ok) {
      return (
        <Alert variant='default' className='col-span-3'>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Failed to fetch blogs</AlertTitle>
          <AlertDescription>Something went wrong, please try again</AlertDescription>
        </Alert>
      )
    }
    const blogs: Blog[] = await data.json()
  return (

    <main className="max-w-7xl m-auto">
      <div className="flex flex-col  w-full  gap-4 pt-9">
          <div>
            
            <h1 className="text-2xl font-bold tracking-tight ">All Blogs</h1>
          </div>
          
          <BlogAll blogs={blogs}/>
      </div>

      
     




    </main>

  );
}
