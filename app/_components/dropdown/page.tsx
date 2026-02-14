
import Img1 from '../../../assets/images/profile.png'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import Link from "next/link"

interface DropdownMenuBasicProps {
  logout: () => void
}

export function DropdownMenuBasic({ logout }: DropdownMenuBasicProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src={Img1 }  alt='user' width={30} height={30}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={'/Profile'}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="cursor-pointer" onClick={logout}>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
