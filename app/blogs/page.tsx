import { Icon } from '@/components/my-ui/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { frick } from '@/fonts/my-fonts'
import React from 'react'
import { siLinkedin, siMedium, siReddit } from 'simple-icons'

export default function page() {
  return (
    <div className='flex flex-col w-full max-w-screen-md'>
      <h2 className='text-2xl font-black uppercase'>Blogs</h2>
      <div className="flex  w-full whitespace-nowrap  gap-2 px-4 mt-2 md:px-0">
        <div className="bg-gradient-to-tr hover:cursor-pointer from-20% text-white flex flex-col relative  dark:text-black dark:from-cyan-600 dark:to-blue-300 from-zinc-900 to-blue-950 p-5 px-10 w-full aspect-[16/5] rounded-3xl flex-1 basis-80 shrink-0 flex-grow">
          <div className="flex ">
            <h3 className={`ml-auto absolute right-10 font-semibold text-4xl mt-4 text-right ${frick.className}`}>Clubspace <br />Blogs</h3>
          </div>
          
          <h4 className={`font-semibold text-3xl mt-auto opacity-90 ${frick.className}`}>About our Blogs</h4>
          <p className="text-sm line-clamp-8 w-full mb-2 max-w-[35rem] text-wrap opacity-90">we know that every data you generate is valuable and nothing is gonna be waste. so we are trying to share our experiences for the people who are curious about technologies at clubspace.</p>
        </div>
      </div>
      <div className='flex gap-5 mt-5 flex-wrap'>
        <div className='flex-1 basis-60'>
          <div className="my-3 h-52 flex-1 bg-primary-foreground rounded-lg bg-[url('/next.svg')] bg-cover bg-top border hover:shadow-md hover:cursor-pointer overflow-hidden" >
            <div className="px-10 pb-5  flex items-end bg-gray-600 bg-opacity-70 h-full w-full">
              <h4 className="text-gray-200 text-2xl font-black bg-gradient-to-t">We have got some Highlights</h4>
            </div>
          </div>
          <h3 className='text-xl font-extrabold text-blue-600'>Platform Architecture</h3>
          <h3 className='text-xl font-bold'>How we are running this platfom</h3>
        </div>
        <div className='flex-1 basis-60'>
          <div className="my-3 h-52 flex-1 bg-primary-foreground rounded-lg bg-[url('/next.svg')] bg-cover bg-top border hover:shadow-md hover:cursor-pointer overflow-hidden" >
            <div className="px-10 pb-5  flex items-end bg-gray-600 bg-opacity-70 h-full w-full">
              <h4 className="text-gray-200 text-2xl font-black bg-gradient-to-t">We have got some Highlights</h4>
            </div>
          </div>
          <h3 className='text-xl font-extrabold text-blue-600'>Branding & Design</h3>
          <h3 className='text-xl font-bold'>Why we highly care about user experience and branding</h3>
        </div>

      </div>
    </div>
  )
}
