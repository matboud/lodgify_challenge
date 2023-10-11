import React, { useState, useEffect, useMemo } from "react";
import ProgressBar from "@/components/ProgressBar";
import Accordion from "@/components/Accordion";
import axios from "axios";

const API_URL =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

interface Task {
  description: string;
  value: number;
  checked: boolean;
}

interface TaskGroup {
  name: string;
  tasks: Task[];
}

function Container() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [groupedTasks, setGroupedTasks] = useState<TaskGroup[]>([]);
  const [totalValues, setTotalValues] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    handleValues(groupedTasks, totalValues);
  }, [groupedTasks, totalValues]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get<TaskGroup[]>(API_URL);
      const totalValue = calculateTotalValue(data);
      setTotalValues(totalValue);
      setGroupedTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const calculateTotalValue = (tasksGroup: TaskGroup[]) =>
    tasksGroup.reduce(
      (sum, group) =>
        sum + group.tasks.reduce((taskSum, task) => taskSum + task.value, 0),
      0
    );

  const handleValues = (tasksGroup: TaskGroup[], totalValue: number) => {
    let roundedProgress = 0;
    const checkedValues = tasksGroup.reduce(
      (sum, group) =>
        sum +
        group.tasks.reduce(
          (taskSum, task) => (task.checked ? taskSum + task.value : taskSum),
          0
        ),
      0
    );

    // Avoid division by zero so we dont gave Infinity as a percentage value.
    if (totalValue !== 0) {
      const progress = (checkedValues * 100) / totalValue;
      roundedProgress = Math.round(progress * 100) / 100;
    }

    setProgressValue(roundedProgress);
  };

  const toggle = (id: number) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  const handleTask = (groupIndex: number, taskIndex: number) => {
    const updatedTasks = [...groupedTasks];
    updatedTasks[groupIndex].tasks[taskIndex].checked =
      !updatedTasks[groupIndex].tasks[taskIndex].checked;
    setGroupedTasks(updatedTasks);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex bg-c-green-100 min-w-[96%] md:min-w-[43rem] sm:min-w-[90%] px-4 md:px-16 sm:px-8 py-10 md:py-20 sm:py-16">
      <div className="bg-white w-full pb-3 rounded-md border-[1px] border-gray-300">
        <div className="pt-12 pl-6 font-bold text-gray-800">
          Lodgify Grouped Tasks
        </div>
        <div className="mt-3 px-6">
          <ProgressBar progress={progressValue} />
        </div>
        <div className="mt-6 px-2">
          {groupedTasks.map((item, index) => (
            <Accordion
              key={index}
              id={index}
              toggle={toggle}
              isOpen={isOpen === index}
              first={index === 0}
              last={index === groupedTasks.length - 1}
              groupedTasks={item}
              handleTask={handleTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Container);
