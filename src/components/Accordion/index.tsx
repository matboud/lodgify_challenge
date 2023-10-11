import React, { FC } from "react";
import Image from "next/image";

interface Task {
  description: string;
  value: number;
  checked: boolean;
}

interface AccordionProps {
  first?: boolean;
  last?: boolean;
  isOpen: boolean;
  toggle: (id: number) => void;
  id: number;
  groupedTasks: {
    name: string;
    tasks: Task[];
  };
  handleTask: (id: number, index: number) => void;
}

const Accordion: FC<AccordionProps> = ({
  first = false,
  last = false,
  isOpen,
  toggle,
  id,
  groupedTasks,
  handleTask,
}) => {
  const borderTopClass = first
    ? "border-t-[1px] rounded-t-md"
    : "border-t-[1px]";
  const borderBottomClass = last ? "border-b-[1px] rounded-b-md" : "";

  const areAllTasksChecked = () => {
    return groupedTasks.tasks.every((task) => task.checked);
  };

  return (
    <div
      className={`border-l-[1px] border-r-[1px] ${borderTopClass} ${borderBottomClass} ${
        areAllTasksChecked() ? "bg-green-100" : ""
      }`}
    >
      <div className={`py-6 px-4 text-sm flex items-center `}>
        <div className="flex w-full items-center">
          <Image
            src="/clipboard.svg"
            width={13}
            height={13}
            alt="Clipboard checklist"
          />
          <div className="pl-3 text-gray-600 font-light">
            {groupedTasks.name}
          </div>
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
            className={`duration-100 ease-in-out ${isOpen && "-rotate-180"}`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="pl-6 pb-4 text-xs text-gray-600">
          {groupedTasks.tasks.map((task, index) => (
            <div key={index} className="flex items-center w-full py-2">
              <input
                aria-describedby="task"
                name={task.description}
                type="checkbox"
                checked={task.checked}
                className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-0"
                onChange={() => handleTask(id, index)}
              />
              <div className="pl-2">
                {`${task.description} (${task.value})`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
