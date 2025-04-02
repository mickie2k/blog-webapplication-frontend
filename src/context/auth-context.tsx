"use client"

import {axiosInstance, axiosJWTInstance} from "@/utils/http";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Role } from "@/enum/role.enum";
import { User } from "@/types/user";
import axios from "axios";
import { toast } from "sonner";




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
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState<User | null>(null);
    

      
    const checkAuthStatus = useCallback(async ()=>{
        console.log("checkAuthStatus")
        try{
            const response = await axiosJWTInstance.get("/auth/me",{
                skipAuthRedirect: true
            });
            setUser(response.data);
            
            
        }catch(error){
            console.log(error)
            setUser(null);
            
           
        }finally{
            setLoading(false);
        }
    },[])

    useEffect(() => {
       checkAuthStatus();
    }
    , [checkAuthStatus]);


    const login = useCallback(async (formDataJson: { [key: string]: FormDataEntryValue } ) => {
        try {
			const response = await axiosInstance.post("/auth/login", formDataJson) 
				if(response.status == 201){
					await checkAuthStatus();
                    router.push("/user");
				}else{
					throw new Error(response.data.message);
				}
			
		} catch (error) {
            if(axios.isAxiosError(error)) {
				toast.error("Incorrect Email or Password.",{
					position: 'top-center',
					description: 'Please try again',
				});
			}else{
				toast.error("Something went wrong.",{
					position: 'top-center',
					description: 'Please try again',
				});
			}
		}

    }, [checkAuthStatus, router])

    const logout = useCallback(async () => {
        try {
            const response = await axiosJWTInstance.get("/auth/logout");
            if (response.status === 200) {
               setUser(null);
               router.push("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    },[router])

    const hasRole = useCallback((role: Role | Role[]) => {
        if (!user) return false;
        
        if (Array.isArray(role)) {
          return role.includes(user.role);
        }
        
        return user.role === role;
      },[user]);

      const value = useMemo(() => ({
        user,
        login,
        logout,
        hasRole,
        isAuthenticated: !!user,
        checkAuthStatus,
        loading,
      }), [user, loading, login, logout, hasRole,checkAuthStatus]); // Only recompute when user or loading changes
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
  };