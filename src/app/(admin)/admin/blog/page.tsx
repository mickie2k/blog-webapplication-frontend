

import React from 'react'

import { SiteHeader } from '@/components/admin/site-header'
import DataBlogTable from '@/components/admin/data-blog-table'

export default function AdminBlogManagement() {
  return (
    <>
   
    <SiteHeader name="Blogs Management"  />
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

         
          <div className='px-4 lg:px-6'>
            <DataBlogTable />
          </div>
          
        </div>
      </div>
    </div> 
    </>
  )
}
