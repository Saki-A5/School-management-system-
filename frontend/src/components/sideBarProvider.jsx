"use client"

import React from 'react'
import { DashboardLayout } from './dashboardLayout'

export const SideBarProvider = ({children}) => {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  )
}
