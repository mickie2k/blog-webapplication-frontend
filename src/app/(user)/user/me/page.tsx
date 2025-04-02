"use client"


import { useAuth } from "@/context/auth-context";

import { useEffect } from "react";

export default function UserProfile() {
    const { user, checkAuthStatus  } = useAuth()

    
    useEffect(()=>{
        checkAuthStatus()
    })
    // Fetch blog data when the component mounts

 
    
    return (
        <main className="max-w-7xl m-auto">
           <div className="flex flex-col  w-full  items-center gap-4 pt-9">
                    
                       <h1 className="text-lg font-bold  ">Username : <span className="font-normal"> {user?.username}</span></h1>
                       <h1 className="text-lg font-bold ">Email : <span className="font-normal">{user?.email}</span> </h1>
                       <h1 className="text-lg font-bold ">First name : <span className="font-normal">{user?.firstName}</span></h1>
                       <h1 className="text-lg font-bold ">Last name : <span className="font-normal">{user?.lastName}</span></h1>
                        <h1 className="text-lg font-bold  ">Role : <span className="font-normal">{user?.role}</span></h1>
                     
                     
                 </div>
        </main>
    );
}
