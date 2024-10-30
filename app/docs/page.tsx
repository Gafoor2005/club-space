import { BreadcrumbResponsive } from '@/components/my-ui/responsive-breadcrumb'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Link } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { fetchDrive } from '@/lib/fetchDrive'
import { auth } from '@/auth'
import DrivesComponet from '@/components/my-ui/drives'

const items = [
  // { href: "/docs", label: "Home" },
  // { href: " /docs/cse", label: "Documentation" },
  // { href: " /docs/abc", label: "abc" },
//   { href: "#", label: "Building Your Application" },
//   { href: "#", label: "Data Fetching" },
  { label: "Docs" },
]



 export  default async function page()  {
  const session = await auth();
  
  return (
    <>
    <div className="px-8 mt-4 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>{items[0].label}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-4"></div>
      <div className="flex gap-2 flex-col max-w-[40rem]">
        <DrivesComponet accessToken={session?.accessToken??""} />
      </div>
    </div>
    
    </>
  )
}

