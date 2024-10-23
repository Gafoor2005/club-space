import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/side-nav";
import { Button } from "@/components/ui/button";
import { Sidebar,SidebarContext,SidebarProvider,useSidebar,SidebarTrigger } from "@/components/ui/sidebar";

export default function Page({
    children,
    
  }: Readonly<{
    children: React.ReactNode;
    
  }>) {
    return <div className="flex m-7 gap-7">
      <div className="md:hidden absolute">
        <Sidebar className="flex justify-center items-center">
          <div className="w-full mx-auto my-4 px-12">

          <SideNav/>
          </div>
        </Sidebar>
      </div>
      <div className="hidden md:block min-w-44">
        <SideNav />
      </div>
      {children}
    </div>
  
    
  }