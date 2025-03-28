"use client"
import BlogAll from "@/components/blog/blog-all";
import MyBlog from "@/components/blog/blog-my";
import { useAuth } from "@/context/auth-context";
import {axiosJWTInstance} from "@/utils/http";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserProfile() {
   const {user} = useAuth();
    
  useEffect(()=>{
    const fetchUser = async () => {
        try {
            const response = await axiosJWTInstance.get("/auth/me");
            console.log(response.data);
        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    fetchUser();    
  },[])
    
    return (
        <main className="max-w-7xl m-auto">
           <div className="flex flex-col  w-full  gap-4 pt-9">
                     <div>
                       <h1 className="text-2xl font-bold tracking-tight ">My Blogs</h1>
                     </div>
                     <MyBlog/>
                 </div>
        </main>
    );
}
