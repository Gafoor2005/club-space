import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/side-nav";

export default function Page({
    children,
    
  }: Readonly<{
    children: React.ReactNode;
    
  }>) {
    return <div className="flex m-7 gap-7">
  
      <SideNav/>
      {children}
    </div>
  
    
  }