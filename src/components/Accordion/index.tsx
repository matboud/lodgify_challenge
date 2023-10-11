import React, { FC } from "react";
import Image from "next/image";

interface AccordionProps {
  first?: boolean;
  last?: boolean;
  isOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({ first, last, isOpen, toggle, id }) => {
  // generating the conditional classes
  const borderTopClass = first
    ? "border-t-[1px] rounded-t-md"
    : "border-t-[1px]";
  const borderBottomClass = last ? "border-b-[1px] rounded-b-md" : "";

  return (
    <div
      className={`border-l-[1px] border-r-[1px] ${borderTopClass} ${borderBottomClass}`}
    >
      <div className={`py-6 px-4 text-sm flex items-center `}>
        <div className="flex w-full items-center">
          <Image
            src="/clipboard.svg"
            width={13}
            height={13}
            alt="Clipboard checklist"
          />
          <div className="pl-3 text-gray-600 font-light">Group 1</div>
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => toggle(id)}
        >
          <div className="text-gray-400 text-xs pr-1">
            {isOpen ? "Hide" : "Show"}
          </div>
          <Image
            src="/chevron.svg"
            width={25}
            height={25}
            alt="Clipboard checklist"
            className={`${!isOpen && " -rotate-180"}`}
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="pl-6 pb-4 text-xs text-gray-600">
          <div className="flex items-center w-full py-2">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="name"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-0"
            />
            <div className="pl-2">Task 2-1</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
