"use client"

import React from 'react'
import { AppSidebar } from './app-sidebar'
import { SidebarProvider } from './ui/sidebar'

export const DashboardLayout = ({children}) => {
  return (
    <SidebarProvider>
      <div className='flex w-full'>
        <AppSidebar /> 
        <main className='w-full'>{children}</main>
      </div>
    </SidebarProvider>
  )
}
