import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-5 bg-teal-50 rounded-full">
      <div
        className="duration-700 ease-in-out h-full bg-teal-500 rounded-full flex items-center justify-end text-xs pr-3 overflow-hidden text-white"
        style={{
          width: `${progress}%`,
        }}
      >
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default ProgressBar;
