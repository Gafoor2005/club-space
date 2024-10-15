import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import UserAvatar from './user-avatar'
import UserName from './user-name'
import DropdownLogoutItem from './dropdown-content'
import { auth } from '@/auth'
import SignIn from './sign-in'

export default async function UserDropdown() {
  const session = await auth()
 
  if (!session?.user) return <SignIn/>
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full focus-visible:shadow-none focus-visible:ring-0 "
            >

                <UserAvatar />

            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel> <UserName /></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownLogoutItem />
        </DropdownMenuContent>

    </DropdownMenu>
  )
}
