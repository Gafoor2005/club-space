
import { Organizer } from "@/components/my-ui/clubs/organizers";
import FriendsActivity from "@/components/my-ui/friends-activity";
import SideNav from "@/components/my-ui/sidebar-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { GalleryVerticalEnd, UsersIcon, Building ,Linkedin, Twitter } from "lucide-react";
import { siX,siDiscord, siLinkedin, SimpleIcon, siInstagram} from 'simple-icons';


import { Bungee } from "next/font/google";
import Link from "next/link";
import { frick } from "@/fonts/my-fonts";
import { Icon } from "@/components/my-ui/icons";

const marvel = Bungee({weight:'400', subsets:['latin']});

export default function Page() {
    return <div className="flex gap-10 w-full flex-col md:flex-row">
      <div className=" w-full  max-w-2xl">
        
        <div className="m-4 md:m-0">
          <h2 className="font-bold text-xl tracking-widest uppercase mb-4"><span className="text-blue-600">C</span><span className="opacity-70">/</span> Coding Club</h2>
          <div className="w-full h-36 md:h-52 bg-neutral-300 rounded-lg relative mb-4">
            {/* <div className="aspect-square w-20 text-lg rounded-xl absolute -bottom-6 left-7 bg-purple-600 text-white flex  items-center justify-center">
              CC
            </div> */}
          </div>
          <div className="flex justify-between flex-col gap-2 md:flex-row">
            <div className="gap-2 flex flex-col">
              <p className="flex opacity-75 text-sm"><Building className="mr-2 size-5"/> Department of computer science</p>
              <p className="opacity-75 flex gap-2 text-sm"><UsersIcon className="size-5"/> 35 followers</p>
            </div>
          
            <h4 className="ml-auto h-min flex bg-primary px-5 py-2 w-min text-primary-foreground justify-center items-center rounded-full font-medium"><GalleryVerticalEnd className="h-4 w-4 mr-2" /> Follow</h4>
          </div>

        </div>
        
        <Separator className="my-7"/>
        <section>
          <h3 className={`mx-4 md:mx-0 font-bold text-2xl mb-5 ${marvel.className}`}>Events</h3>
          <div className="flex  w-full whitespace-nowrap  gap-2 px-4 md:px-0">
            <div className="bg-gradient-to-tr hover:cursor-pointer from-20% text-white flex flex-col relative  dark:text-black dark:from-cyan-600 dark:to-blue-300 from-zinc-900 to-blue-950 p-5 px-10 w-full aspect-[16/5] rounded-lg flex-1 basis-80 shrink-0 flex-grow">
              <div className="flex ">
              <p className="bg-secondary text-secondary-foreground h-min uppercase w-fit px-2 py-4 font-bold text-xs rounded-b-md shadow-md absolute top-0">upcoming</p>
              <h3 className={`ml-auto font-semibold text-4xl mt-4 text-right ${frick.className}`}>Coding challenge <br /> 2025 Edition</h3>

              </div>
              <h4 className={`font-semibold text-3xl mt-auto opacity-80 ${frick.className}`}>30 Oct</h4>
              <p className="text-sm line-clamp-2 w-full max-w-72 text-wrap opacity-80">Solve some problems and showcase your code. take a trophy to home</p>
            </div>
          </div>
        </section>
        <Separator className="my-7"/>
        <section className="  w-full ">
          <h3 className={`mx-4 md:mx-0 font-bold text-lg mb-2 ${marvel.className}`}>Organizers</h3>
          <ScrollArea className="whitespace-nowrap  pb-4">
            <div className="flex  w-full whitespace-nowrap  gap-2 px-4 md:px-0">
              <Organizer name="Sandeep Mopidevi" role="President" />
              <Organizer name="Jyoshnavi" role="Vice President" />
              <Organizer name="Likhith" role="Secretary" />
              <Organizer name="Sri Godha" role="Treasurer" />
            </div>
            <ScrollBar orientation="horizontal" className="mx-4 md:mx-0"/>
          </ScrollArea>
        </section>
        
      </div>
      <div className="w-72 sticky top-24 h-min ">
        <h2 className={`text-xl font-black uppercase  px-2`}>About</h2>
        <section className="text-xs opacity-85 border-l ml-3 mt-2 pl-3 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus nobis sequi aperiam nulla aliquid accusantium sed tempore minima inventore
        </section>
        <h2 className={`text-xl font-black uppercase px-2`}>Social</h2>
        <section className="text-xs opacity-85 font-medium border-l ml-3 mt-2 pl-3">
          <Link href={"https://devloopers.me/discord"} >
            <div className="flex hover:bg-secondary items-center gap-3 p-3 rounded-sm ">
              <Icon ic={siDiscord} />
              <p>Coding Club</p>
            </div>
          </Link>
          <Link href={"https://devloopers.me/discord"} >
            <div className="flex hover:bg-secondary items-center gap-3 p-3 rounded-sm ">
              <Icon ic={siX} />
              <p>@Coding_Club</p>
            </div>
          </Link>
          <Link href={"https://devloopers.me/discord"} >
            <div className="flex hover:bg-secondary items-center gap-3 p-3 rounded-sm ">
              <Icon ic={siInstagram} />
              <p>coding_club</p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  }

