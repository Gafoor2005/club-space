"use client"
import { Folder, File, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FileWithIcon({name,toPath,file}:{name:string,toPath:string,file:any}) {
  const router = useRouter();
  
  return (
    <div className="flex gap-2">
        <Button  variant="outline" className="flex justify-start w-full" onClick={()=> router.push(file.webUrl)}>
            <File className="mr-2 h-4 w-4" /> <span>{name}</span> 
        </Button>
        <Link href={file["@microsoft.graph.downloadUrl"]}>
            <Button variant="ghost" className="flex justify-start">
                <Download className=" h-4 w-4"/>
            </Button>
        </Link>
    </div>
  )
}
