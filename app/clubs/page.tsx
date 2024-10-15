
import SideNav from "@/components/my-ui/side-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function Page() {
    return <>
      <div className="flex m-7 gap-7">
  
        <SideNav/>
        <div className="w-full">
          <p className="underline text-gray-400 text-xs mb-1">AD</p>
          <div className="w-full h-52 bg-neutral-300 rounded-lg">
          </div>
        </div>
        <div className="w-80  rounded-md py-5">
          <h4 className="text-xl font-bold text-gray-400 mb-2 mx-4">Friends</h4>
          <Button variant={"link"} className="w-44 justify-start font-semibold">
            <Avatar className="mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Gafoor
  
          </Button>
          <Button variant={"link"} className="w-44 justify-start font-semibold text-left">
            <Avatar className="mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
  
            <p>Ramsai</p>  
            <p className="text-xs">
            22481A05H5
  
            </p>
            </div>
  
          </Button>
          
        </div>
      </div>
  
    </>
  }