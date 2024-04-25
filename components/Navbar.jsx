import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const navlist = ["Home", "Flashcard", "Contact", "FAQ"];
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-[32px]">
      <div>
        <Image src="/image.png" width="150" height="100" alt="logo" />
      </div>



      <div className=" items-center gap-x-4 hidden sm:flex">
            <ul className="flex items-center gap-x-4">
                {navlist.map((item) => {
                return (
                    <a href={"#"+item} key={item} className="text-sm text-[#3A3740]/80 font-semibold cursor-pointer">
                    {item}
                    </a>
                );
                })}
            </ul>
            <Button>Login</Button>
      </div>
      

      {/* Mobile Navigation */}


      <div className="sm:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
