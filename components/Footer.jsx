import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooTer = () => {
  return (
    <div id="FAQ" className="flex-col space-y-8 mt-10">
     <h1 className="bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text text-3xl font-bold">FAQ</h1>
      <Accordion type="single" collapsible className="w-full flex-col space-y-[32px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can education flashcards be used for all age groups</AccordionTrigger>
          <AccordionContent>
            Yes. It .....
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do education flashcards work</AccordionTrigger>
          <AccordionContent>
            Yes. It
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can education flashcards be used for test preparations</AccordionTrigger>
          <AccordionContent>
            Yes. It can be used for test preparation
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="h-[60px]">

      </div>
    </div>
  );
};

export default FooTer;
