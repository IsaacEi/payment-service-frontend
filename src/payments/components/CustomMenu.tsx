import { type FC } from 'react'
import { Avatar/* , AvatarFallback */, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ShieldUser,
} from "lucide-react"

export const CustomMenu: FC = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        </Avatar>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className='gap-5'>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <ShieldUser color="#16a0bb" strokeWidth={2.5} />
          <h1 className="font-montserrat text-xs tracking-tight">
            {'Isaac Cisneros'}
          </h1>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
