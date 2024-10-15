import { auth } from "../../auth"
import Image from "next/image"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
  
  if (!session.user.image) 
  return (
    <Image
      src="/placeholder-user.png"
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  )

  return (
    <Image
      src={session.user.image}
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  )
}