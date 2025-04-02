"use client"
import React, { useEffect, useState } from 'react'
import { Table,TableHeader,TableRow,TableBody,TableCell,TableHead } from '../ui/table'

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { useRouter } from 'next/navigation'
import { axiosJWTInstance } from '@/utils/http'
import { BlogDataTable } from '@/types/blogtable'
import { handleErrorAdmin } from './handle-error-admin'




export default function DataBlogTable() {
  const [data , setData] = useState<BlogDataTable[]>([])
  const router = useRouter()



  useEffect(()=>{
    const fetchBlogTable = async () => {
      try {
        const res = await axiosJWTInstance.get('/admin/blog')
        const data = res.data
        setData(data)
      } catch (error) {
       handleErrorAdmin(error,router);
      }
      
    }
    fetchBlogTable()
  },[router])

  return (
    <div className='overflow-hidden rounded-lg border' >

    
      <Table>
        
        <TableHeader className='sticky top-0 z-10 bg-muted'>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Premium</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>

            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className='hover:bg-muted'>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.isPremium?'Premium':'-'}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.updatedAt}</TableCell>

              <TableCell className='text-right'><MoreButtonDropdownBlog/></TableCell>
            </TableRow>
          ))}
          
          
        </TableBody>
      </Table>
    </div>
  )
}


function MoreButtonDropdownBlog(){
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