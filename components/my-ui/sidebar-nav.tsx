"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Bell, Rocket, User, Files } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function SideNav() {
    const pathname = usePathname()
    const router = useRouter()
    console.log(pathname)
    return (
        <div className="flex flex-col gap-2">
            <Button variant={pathname=='/'? "default":"secondary"} className=" justify-start" onClick={()=> router.push('/')}>
                <User className="mr-2 h-4 w-4" /> Feed
            </Button>
            <Button variant={pathname=='/notifications'? "default":"secondary"} className=" justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
            <Button variant={pathname=='/clubs'? "default":"secondary"} className="justify-start" onClick={()=> router.push('/clubs')}>
                <Rocket className="mr-2 h-4 w-4" /> Clubs
            </Button>
            <Button variant={pathname.startsWith('/docs')? "default":"secondary"} className="justify-start" onClick={()=> router.push('/docs')}>
                <Files className="mr-2 h-4 w-4" /> Docs
            </Button>
        </div>
    )
}
