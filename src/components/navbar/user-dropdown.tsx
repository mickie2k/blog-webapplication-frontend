import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { User } from '@/types/user'
import Link from 'next/link'

interface UserDropDownProps {
    logout: () => void
    user: User
}

export default function UserDropDown(props: UserDropDownProps) {
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
                    <DropdownMenuItem>
                        Profile
                        
                    </DropdownMenuItem> 
                    <Link href="/user">
                        <DropdownMenuItem>
                            Blogs
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        Settings
                      
                    </DropdownMenuItem>
                    
                </DropdownMenuGroup>
               
                <DropdownMenuItem onClick={logout}>
                    Log out
                    
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
