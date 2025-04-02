"use client"

import MyBlog from "@/components/blog/blog-my";
import { Blog } from "@/types/blog";
import {axiosJWTInstance} from "@/utils/http";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
export default function UserProfile() {
    const [data, setData] = useState<Blog[]>([])
    
    // Fetch blog data when the component mounts

    
  useEffect(()=>{
    const fetchBlog = async () => {
        try {
            const response = await axiosJWTInstance.get("/blog/me");
            const data = response.data;
            setData(data);
        }
        catch (error) {
            if(axios.isAxiosError(error)){
                toast.error('Failed to fetch data',{
                    description: 'Something went wrong, try again',
                })
                
            }
        }
    };

    
      fetchBlog();    
    
  },[])
    
    return (
        <main className="max-w-7xl m-auto">
           <div className="flex flex-col  w-full  gap-4 pt-9">
                     <div>
                       <h1 className="text-2xl font-bold tracking-tight ">My Blogs</h1>
                     </div>
                     <MyBlog blogs={data} setData={setData}/>
                 </div>
        </main>
    );
}
