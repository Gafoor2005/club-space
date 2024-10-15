import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/side-nav";
import Image from "next/image";

export default function Page() {
    return <>
  
      <div className="w-full ">
        <p className="underline text-gray-400 text-xs mb-1">AD</p>
        <div className="w-full h-52 bg-primary rounded-xl">
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-extrabold uppercase">Highlights</h2>
          <div className="my-3 h-52 w-96 bg-primary-foreground rounded-xl bg-[url('/next.svg')] bg-cover bg-center border hover:shadow-md hover:cursor-pointer overflow-hidden" >
            <div className="px-10 pb-5 flex items-end bg-slate-500 bg-opacity-70 h-full w-full">
              <h4 className="text-gray-200 text-2xl font-black bg-gradient-to-t">We have got some Highlights</h4>
            </div>
          </div>
        </div>
      </div>
      <FriendsActivity />
    </>
  
    
  }