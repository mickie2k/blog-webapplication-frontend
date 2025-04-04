

import { SectionCards } from '@/components/admin/section-cards'

import React from 'react'

import { SiteHeader } from '@/components/admin/site-header'

export default function AdminDashboard() {
  return (
    <>
   
    <SiteHeader name="Dashboard"  />
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
         
         
          
        </div>
      </div>
    </div> 
    </>
  )
}
