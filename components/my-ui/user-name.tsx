import { auth } from "@/auth"

export default async function UserName() {
  const session = await auth()
 
  if (!session?.user) return null
  return (
    <p>{session.user.name}</p>
    
  )


}