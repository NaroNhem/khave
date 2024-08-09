import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Copy } from 'lucide-react'
import {SquarePen} from 'lucide-react'
import { Input } from '@/components/ui/input'
  
type Props = {}

const Create = (props: Props) => {
    return(
    <Dialog >
      <DialogTrigger asChild>
        <Button variant='outline' className='w-14 bg-inherit'><SquarePen className='h-8 w-8 dark:text-white'/></Button>
      </DialogTrigger>
      <DialogContent className="w-[20rem] sm:w-full" onInteractOutside={(e) => {
          e.preventDefault();
        }}>
        <DialogHeader>
          <DialogTitle>New Folder</DialogTitle>
          <DialogDescription>
            <h1>Create a new folder for your ideas.</h1>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
            <Label className="pb-2"> Name </Label>
            <Input id="name" placeholder="My New Project" className='focus-visible:ring-1' required />
          <div className="grid flex-1 gap-2">
          </div>
        </div>
        <DialogFooter className=" ">
          <DialogClose asChild className='w-full'>
            <Button type="submit" variant="secondary">
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}

export default Create