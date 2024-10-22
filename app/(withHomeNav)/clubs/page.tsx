
import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/side-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd } from "lucide-react";
export default function Page() {
    return <>
      <div className="w-full">
        <h2 className="font-bold text-xl tracking-widest uppercase mb-4"><span className="text-blue-600">C</span><span className="opacity-70">/</span> Coding Club</h2>
        <div className="w-full h-52 bg-neutral-300 rounded-lg relative mb-8">
          <div className="aspect-square w-20 text-lg rounded-xl absolute -bottom-6 left-7 bg-purple-600 text-white flex  items-center justify-center">
            CC
          </div>
        </div>
        
        <h4 className="ml-auto flex bg-primary px-5 py-2 w-min text-primary-foreground justify-center items-center rounded-full font-medium"><GalleryVerticalEnd className="h-4 w-4 mr-2" /> Follow</h4>

      </div>
      <FriendsActivity/>
    </>
  }