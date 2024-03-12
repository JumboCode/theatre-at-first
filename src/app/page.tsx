//This page is an example of the clerk client working; currently everything is
//public and requires no authentication or signing in if you go to local host
import { UserButton } from "@clerk/nextjs";

 
export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
    </div>
  )
}