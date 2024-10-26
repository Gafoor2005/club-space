import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/side-nav";
import { Button } from "@/components/ui/button";
import { Sidebar,SidebarTrigger } from "@/components/ui/sidebar";
import { frick } from "../layout";
import { Separator } from "@/components/ui/separator";
import { SidebarClose } from "@/components/my-ui/sidebar-close";

export default function Page({
    children,
    
  }: Readonly<{
    children: React.ReactNode;
    
  }>) {
    return <div className="flex m-7 gap-7">
      <div className="md:hidden absolute">
        <Sidebar className="flex justify-center items-center">
          <div className="w-full mx-auto my-4 px-8">
            <div className="flex justify-between items-center">
              <p className={frick.className+ " text-3xl pt-1.5 select-none"}>ClubSpace</p>
              <SidebarClose/>
            </div>
            <Separator className="my-4"/>
            <SideNav/>
          </div>
        </Sidebar>
      </div>
      <div className="hidden md:block min-w-44 sticky top-24 h-min">
        <SideNav />
      </div>
      {children}
    </div>
  
    
  }