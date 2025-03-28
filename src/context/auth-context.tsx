"use client"

import {axiosInstance, axiosJWTInstance} from "@/utils/http";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Role } from "@/enum/role.enum";
import { User } from "@/types/user";




interface AuthContextType {
	user: User | null;
	login: (formDataJson: { [key: string]: FormDataEntryValue }) => Promise<void>;
    logout: () => Promise<void>;
    hasRole: (role: Role | Role[]) => boolean;
    isAuthenticated: boolean;
    loading: boolean;
    checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: async () => {},
    logout: async () => {},
    hasRole: () => false,
    isAuthenticated: false,
    checkAuthStatus: async () => {},
});



export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const router = useRouter();
    const [loading, isLoading] = useState(true);
    const [user,setUser] = useState<User | null>(null);

    const checkAuthStatus = async ()=>{
        console.log("checkAuthStatus")
        try{
            const response = await axiosJWTInstance.get("/auth/me",{
                skipAuthRedirect: true
            });
            setUser(response.data);
            
            
        }catch(error){
           
            setUser(null);
        }finally{
            isLoading(false);
        }
    }

    useEffect(() => {
       checkAuthStatus();
    }
    , []);


    const login = async (formDataJson: { [key: string]: FormDataEntryValue } ) => {
        try {
			const response = await axiosInstance.post("/auth/login", formDataJson) 
				if(response.status == 201){
					await checkAuthStatus();
                    router.push("/user");
				}else{
					throw new Error(response.data.message);
				}
			
		} catch (error) {
            console.error('Login failed:', error);
            return Promise.reject(); // Reject the promise to handle it in the component
		}

    }

    const logout = async () => {
        try {
            const response = await axiosJWTInstance.get("/auth/logout");
            if (response.status === 200) {
               setUser(null);
               router.push("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    const hasRole = (role: Role | Role[]) => {
        if (!user) return false;
        
        if (Array.isArray(role)) {
          return role.includes(user.role);
        }
        
        return user.role === role;
      };
    
    return (
        <AuthContext.Provider value={{user, login, logout, hasRole, isAuthenticated: !!user, checkAuthStatus, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
  };