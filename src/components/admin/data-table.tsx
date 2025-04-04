"use client"
import React, { useEffect, useState } from 'react'
import { Table,TableHeader,TableRow,TableBody,TableCell,TableHead } from '../ui/table'

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { useRouter } from 'next/navigation'
import { axiosJWTInstance } from '@/utils/http'
import { UserData } from '@/types/usertable'
import { handleErrorAdmin } from './handle-error-admin'


export default function DataTable() {
  const [data , setData] = useState<UserData[]>([])
  const router = useRouter()


  useEffect(()=>{
    const fetchUserTable = async () => {
      try {
        const res = await axiosJWTInstance.get('/admin/user')
        const data = res.data
        setData(data)
      } catch (error) {
        handleErrorAdmin(error,router);
      }
      
    }
    fetchUserTable()
  },[router])

  return (
    <div className='overflow-hidden rounded-lg border' >

    
      <Table>
        
        <TableHeader className='sticky top-0 z-10 bg-muted'>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Firstname</TableHead>
            <TableHead>Lastname</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id} className='hover:bg-muted'>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.roleid}</TableCell>

              <TableCell className='text-right'><MoreButtonDropdownUser/></TableCell>
            </TableRow>
          ))}
          
          
        </TableBody>
      </Table>
    </div>
  )
}


function MoreButtonDropdownUser(){
  return(
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <PiDotsThreeOutlineVerticalFill />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    
  )
}