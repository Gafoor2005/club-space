import { BreadcrumbResponsive } from '@/components/my-ui/responsive-breadcrumb'
import { log } from 'console'
import React from 'react'
import FolderView from '@/components/my-ui/folderView';
import { auth } from '@/auth';

export default async function page({ params }: { params: { path: string[] } }) {
  const session = await auth();
  return (
    <div className="px-8 mt-4 w-full">
      <BreadcrumbResponsive path={params.path}  />
      <div className="h-4"></div>
      <FolderView accessToken={session?.accessToken??""} driveName={decodeURIComponent(params.path[0])} drivePath={decodeURIComponent(params.path.join('/'))} />
    </div>
  )
}
