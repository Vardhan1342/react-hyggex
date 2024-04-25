"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const content = [
  "9+10+10=29",
  "4 × 2.5 = 10",
  "100 ÷ 10 = 10",
  "5² = 10¹",
  "20 ÷ 2 = 10",
  "√100 = 10",
  "log₁₀(10) = 1",
  "12 - 2 = 10",
  "30 ÷ 3 = 10",
  "sin(π/6) = 1/2",
  "2^(3+1) = 10",
];
const Body = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {content.map((item) => {
            return (
              <CarouselItem className="flex justify-center items-center">
                <div className="w-[712px] h-[393px] bg-gradient-to-b from-[#051A91] via-[#061C93] to-[#1F80EB] rounded-[42.51px] text-white font-semibold text-2xl text-center">
                  <h1 className="flex justify-center items-center h-full">
                    {item}
                    
                  </h1>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="mt-10  w-full flex justify-around items-center gap-x-4">
          <Image src="/retry.png" width="30" height="10" alt="retyr"/>
          <div className="flex items-center gap-x-2">

          <CarouselPrevious className="bg-blue-800 mt-8" />
          <div className="  text-black font-semibold text-xl">
            {current} / {content.length}
          </div>
          <CarouselNext className="bg-blue-800 text-white mt-8" />
          </div>

          <Image src="/size.png" width="30" height="10" alt="retyr"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Body;
