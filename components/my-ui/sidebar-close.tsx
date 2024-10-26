"use client"

import React from "react"
import { Button } from "../ui/button"
import { useSidebar } from "../ui/sidebar"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const SidebarClose = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="default"
      className={cn("h-9 w-9 p-0", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <X />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarClose.displayName = "SidebarTrigger"

export {SidebarClose}