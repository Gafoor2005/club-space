"use client"
import UserAvatar from '@/components/my-ui/user-avatar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { User, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import router, { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter();
  return (
    <div className='w-full flex'>
      <div className='flex flex-col min-w-24'>
        <Button variant={'link'} className=' flex justify-start'>
          <Avatar className="mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar> Gafoor
        </Button>
      </div>
      <div className='bg-red-500 w-full max-w-screen-md mx-auto aspect-[16/5] rounded-2xl'>page</div>

    </div>
  )
}
