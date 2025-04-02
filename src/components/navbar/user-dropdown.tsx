import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
   
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { User } from '@/types/user'
import Link from 'next/link'
import { Role } from '@/enum/role.enum'

interface UserDropDownProps {
    logout: () => void
    user: User
}

export default function UserDropDown(props: Readonly<UserDropDownProps>) {
    const { logout, user } = props
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{user.username}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mx-4">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href="/user/me">
                    <DropdownMenuItem>
                        Profile
                        
                    </DropdownMenuItem> 
                    </Link>
                    <Link href="/user">
                        <DropdownMenuItem>
                            Blogs
                        </DropdownMenuItem>
                    </Link>
                    
                    {user.role === Role.ADMIN && (
                        <Link href="/admin/dashboard">
                        <DropdownMenuItem>
                            Admin
                        </DropdownMenuItem>
                        </Link>
                    )}
                   
                    {/* <DropdownMenuItem>
                        Settings
                      
                    </DropdownMenuItem> */}
                    
                </DropdownMenuGroup>
               
                <DropdownMenuItem onClick={logout}>
                    Log out
                    
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
