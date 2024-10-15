"use client"
import React from 'react'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { signOut } from 'next-auth/react'

export default function DropdownLogoutItem() {
  return (
    
        <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
  )
}
