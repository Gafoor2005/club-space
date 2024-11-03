import { cn } from "@/lib/utils";
import { SimpleIcon } from "simple-icons";

export function Icon({ic,className}:{ic:SimpleIcon,className?:string},){
    return (
      <div className={cn("dark:fill-white size-4",className)} dangerouslySetInnerHTML={{__html: ic.svg}}></div>
    )
  }