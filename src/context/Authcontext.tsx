"use client"

import {axiosJWTInstance} from "@/utils/http";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import cookies from "js-cookie";



interface AuthContextType {
	username: string;
	login: (formDataJson: { [key: string]: FormDataEntryValue }) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    username: "",
    login: async () => {},
    logout: async () => {}
});

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(false);
    useEffect(() => {
        
        const fetchUsername = async () => {
            try {
                console.log("Fetching username...");
            const response = await axiosJWTInstance.get("/user/username");
            if(response){
                if(response.status == 200){
                    const {username} = response.data;
                    setUsername(username);
                    setIsLogin(true);
                }
            }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLogin(false);
            }
            
        }

        if(cookies.get("isAuth") == "true"){
            fetchUsername();
        }
            
        
       
    }
    , []);


    const login = async (formDataJson: { [key: string]: FormDataEntryValue } ) => {
        try {
			const response = await axiosJWTInstance.post("/auth/login", formDataJson);
			
			 if (response.status === 201) {
				router.push("/");
			}
		} catch (error) {
            console.error('Logout failed:', error);
		}

    }

    const logout = async () => {
        try {
            const response = await axiosJWTInstance.get("/auth/logout");
            if (response.status === 200) {
                setIsLogin(false);
                setUsername("");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }
    
    return (
        <AuthContext.Provider value={{username, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
  };