"use client"
import * as React from "react"
import Link from "next/link"


import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@mui/material"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type BreadcrumbItemType = {
  label: string;
  href?: string;
};

// const items = [
//   { href: "/docs", label: "Home" },
//   // { href: " /docs/cse", label: "Documentation" },
//   // { href: " /docs/abc", label: "abc" },
// //   { href: "#", label: "Building Your Application" },
// //   { href: "#", label: "Data Fetching" },
//   { label: "Home" },
// ]


export function BreadcrumbResponsive({path}:{path:string[]}) {
  
  const [open, setOpen] = React.useState(false)
  const [isDesktop, setIsDesktop] = useState(false);
  const [items, setItems] = useState<BreadcrumbItemType[]>([]);

  const pathParts = path.filter((part) => part !== '');

  useEffect(() => {
    // console.log("A");
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  
  useEffect(() => {
    // console.log("B");
    
    const newItems = pathParts.map((part, index) => {
      const url = '/docs/' + pathParts.slice(0, index + 1).join('/');
      return { href: url, label: decodeURIComponent(part) } as BreadcrumbItemType;
    });

    // console.log(newItems);
    let last = newItems.pop()
    newItems.push({label:last!.label })
    
    setItems(newItems);
  }, [path.toString()]); // Run only when pathParts changes

  // Calculate ITEMS_TO_DISPLAY based on the items state
  const ITEMS_TO_DISPLAY = Math.min(items.length, 3);


  
  // console.log(items);
  

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(0, -3).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href ? item.href : "#"}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {items.slice(0, -3).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href ? item.href : "#"}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {items.slice(-ITEMS_TO_DISPLAY ).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <>
                <BreadcrumbLink
                  asChild
                  className="max-w-20 truncate md:max-w-none"
                >
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
