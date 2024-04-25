import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenuSharp } from "react-icons/io5";
const navlist = ["Home", "Flashcard", "Contact", "FAQ"];

const MobileNavbar = () => {
  return (
    <div>
          <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><IoMenuSharp /></Button>
      </SheetTrigger>
      <SheetContent >
      
        <ul className="cursor-pointer space-y-2 mb-6">
            {navlist.map((item)=>(
            <a href={"#"+item} htmlFor="name" className="text-center" key={item}>
              {item}
            </a>
            
        ))}
        </ul>
          
          
          
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
}

export default MobileNavbar;
