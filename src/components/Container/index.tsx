"use client";
import React, { useState } from "react";
import ProgressBar from "@/components/ProgressBar/index";
import Accordion from "@/components/Accordion/index";

const Container = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (id) => {
    if (isOpen == id) {
      setIsOpen(null);
    } else setIsOpen(id);
  };
  return (
    <div className="flex bg-c-green-100 min-w-[96%] md:min-w-[43rem] sm:min-w-[90%] px-4 md:px-16 sm:px-8 py-10 md:py-20 sm:py-16">
      <div className="bg-white w-full pb-3 rounded-md border-[1px] border-gray-300">
        <div className="pt-12 pl-6 font-bold text-gray-800">
          Lodgify Grouped Tasks
        </div>
        <div className="mt-3 px-6">
          <ProgressBar />
        </div>
        <div className="mt-4 px-2">
          <Accordion id={1} toggle={toggle} isOpen={isOpen == 1} first last />
        </div>
      </div>
    </div>
  );
};

export default Container;
