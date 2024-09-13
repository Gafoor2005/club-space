"use client"

import { Home, LibraryBig, LineChart, Package, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { usePathname } from 'next/navigation'
import { Component, useState } from 'react'

export default function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="/orders"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/orders") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/orders") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <ShoppingCart className="h-4 w-4" />
        Orders
        {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge> */}
      </Link>
      <Link
        href="/library"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/library") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/library") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <LibraryBig className="h-4 w-4"/>
        Library
      </Link>
      <Link
        href="/products"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/products") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/products") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <Package className="h-4 w-4" />
        Products
      </Link>
      <Link
        href="/customers"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/customers") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/customers") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <Users className="h-4 w-4" />
        Customers
      </Link>
      <Link
        href="/analytics"
        className={`flex items-center gap-3 rounded-lg ${(pathname == "/analytics") ? "bg-muted" : ""} px-3 py-2 ${(pathname == "/analytics") ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
      >
        <LineChart className="h-4 w-4" />
        Analytics
      </Link>
    </nav>
  )
}

function NavMenuLink(toPath: string ) {
  const pathname = usePathname()
  var capPath: string = toPath.substring(1);
  return <Link
    href="/products"
    className={`flex items-center gap-3 rounded-lg ${(pathname == toPath) ? "bg-muted" : ""} px-3 py-2 ${(pathname == toPath) ? "text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}
  >
    {capPath}
  </Link>
}