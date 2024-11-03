"use client"
import React from 'react'
import { Sidebar } from '../ui/sidebar'
import { SidebarClose } from './sidebar-close'
import { Separator } from '../ui/separator'
import SideNav from './sidebar-nav'
import { frick } from '@/fonts/my-fonts'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const showPages = [
  "/",
  "/clubs",
  "/docs",
  "/blogs",
]

export default function SidebarUi() {
  const pathname = usePathname()
  console.log(showPages.includes(pathname));
  
  return (
    <>
      <div className="md:hidden absolute">
        <Sidebar className="flex justify-center items-center">
          <div className="w-full mx-auto my-4 px-8">
            <div className="flex justify-between items-center">
              <p className={frick.className+ " text-3xl pt-1.5 select-none"}>ClubSpace</p>
              <SidebarClose/>
            </div>
            <Separator className="my-4"/>
            <SideNav/>
          </div>
        </Sidebar>
      </div>
      <div className={cn("hidden min-w-44 sticky top-24 h-min",showPages.includes(pathname)?"md:block":"")}>
        <SideNav />
      </div>
    </>
    
  )
}
