"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Button } from './ui/button';
import Body from './Body';
import Link from 'next/link';

const Items=["Study" , "Quiz" ,"Test" ,"Game" ,"Others"]
const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
  return (
    <main className='flex flex-col space-y-10 mt-10'>
      <nav className='flex items-center  gap-x-1 text-gray-600 text-sm font-medium'>
         <GoHome  size={20}/>
         <h1>&gt;Flashcard</h1>
         <h1>&gt;Mathematics</h1>
         <h1 className='bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text'>&gt;Relations and Functions</h1>
      </nav>
      <h1 className="bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text text-3xl font-bold"> Relations and Functions ( Mathematics)</h1>
      <nav className='mb-4 mt-10'>
            <ul className='flex justify-center items-center w-full gap-x-6'>
                {Items.map((item, index) => (
                    <li
                        key={index}
                        className={`text-gray-600 font-semibold cursor-pointer ${
                            index === activeIndex ? 'border-b-2  border-blue-500 text-blue-900' : ''
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
       {activeIndex==0&&  <Body /> }
       {activeIndex!=0 && <div className='w-full flex justify-center items-center bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-lg h-[300px] text-2xl text-white'>
        <h1>On Process ..</h1>
        </div>}
     

      <div className='flex justify-between items-center'>
        <Image src="/image2.png" alt="image" width="150" height="100" />
        

        <Link href="" className='flex items-center justify-center gap-x-1' aschild>
        <Button size="icon" className="p-1"><FaPlus className="text-2xl" /></Button>
        <h1 className=' text-xl bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-semibold'>Create Flash Card</h1>
        </Link>
      </div>
    </main>
  );
}

export default Main;
