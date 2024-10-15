"use client"
import { Folder } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FolderWithIcon({name,toPath}:{name:string,toPath:string}) {
  const router = useRouter();
  return (
    <Button  variant="outline" className="flex justify-start max-w-screen-md" onClick={()=> router.push(toPath)}>
      <Folder className="mr-2 h-4 w-4" /> {name}
    </Button>
  )
}
