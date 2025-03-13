"use client"
import {axiosJWTInstance} from "@/utils/http";
import { useEffect, useState } from "react";

export default function UserProfile() {
    const [user, setUser] = useState<string>("");
    
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axiosJWTInstance.get("/user/username");
                if(response){
                    if(response.status == 200){
                        const {username} = response.data;
                        setUser(username);
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserProfile();
    },[])
    
    return (
        <main className="min-h-full w-full relative ">
           {user ?  <div className="text-center text-2xl font-bold">{user}</div>:
            <div className="text-center text-2xl font-bold">Loading...</div>
           }
        </main>
    );
}
