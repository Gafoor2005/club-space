import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "../mode-toggle"
import UserDropdown from "./user-dropdown"
import { frick } from "@/fonts/my-fonts"



export function Header() {
  return (
    <div className="h-16 flex px-7 items-center justify-between md:sticky top-0 bg-primary-foreground bg-opacity-85 backdrop-blur-lg z-50 border-b">

      <div className="flex justify-center items-center gap-4">
        <SidebarTrigger className="md:hidden"/>
        <Link href='/' >
          <p className={frick.className+ " text-3xl pt-1.5 select-none"}>ClubSpace</p>
        </Link>
      </div>

      {/* <Image
        src={"/csLogo.svg"}
        width={50}
        height={30}
        alt="cs logo"
      /> */}

      <div className="flex justify-center items-center gap-4">
        
        <ModeToggle />
        <UserDropdown/>
        
      </div>

    </div>
  )
}
