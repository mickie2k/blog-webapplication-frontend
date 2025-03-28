"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@/context/auth-context";
import UserDropDown from "./user-dropdown";
import Logo from "../logo/logo";
import { PiNotePencilLight, PiSignInLight } from "react-icons/pi";
export default function navbar() {
    const { user, isAuthenticated,logout } = useAuth();
    return (
        <div className="flex flex-row w-full justify-between items-center border-b border-border h-16 px-6">
            <Link href="/"><Logo/></Link>
            <div className="flex gap-4">
                {isAuthenticated && user ? 
                    <>  
                        
                        <Link href="/user/new-blog"><Button variant="ghost"><PiNotePencilLight/> Write</Button></Link>
                        <UserDropDown user={user} logout={logout}/>
                    </>
                    : 
                    <Link href="/login"><Button className="cursor-pointer" variant="outline"><PiSignInLight /> Login</Button></Link>}
                {/* <Link href="/login"><Button className="cursor-pointer">Login</Button></Link>
                
                <Button onClick={logout} className="cursor-pointer">Logout</Button> */}
            </div>
        </div>
    )
}
