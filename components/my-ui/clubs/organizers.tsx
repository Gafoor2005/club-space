import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export function Organizer({name,role}:{name:string,role:string}) {
  return (
    <div className="bg-gradient-to-t flex-col text-center flex gap-3 items-center w-32 basis-32 from-20% from-violet-100 to-violet-200 dark:from-zinc-900 dark:to-blue-950 flex-1 shrink-0 flex-grow p-5 py-8 rounded-lg shadow-sm ">
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium text-xs">{name}</p>
        <p className="font-semibold text-xs opacity-70">{role}</p>
      </div>
    </div>
  )
}
