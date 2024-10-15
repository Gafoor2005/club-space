"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Bell, Rocket, User } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function SideNav() {
    const pathname = usePathname()
    const router = useRouter()
    console.log(pathname)
    return (
        <div className="sidebar flex flex-col gap-2 h-full sticky top-24">
            <Button variant={pathname=='/'? "default":"secondary"} className="w-44 justify-start">
                <User className="mr-2 h-4 w-4" /> Feed
            </Button>
            <Button variant={pathname=='/notifications'? "default":"secondary"} className="w-44 justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
            <Button variant={pathname=='/clubs'? "default":"secondary"} className="w-44 justify-start" onClick={()=> router.push('/clubs')}>
                <Rocket className="mr-2 h-4 w-4" /> Clubs
            </Button>
        </div>
    )
}
