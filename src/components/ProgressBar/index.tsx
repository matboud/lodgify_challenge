import React from "react";

const ProgressBar = () => {
  return (
    <div className={`w-full h-5 bg-teal-50 rounded-full`}>
      <div
        className={`h-full w-[75%] bg-teal-500 rounded-full flex items-center justify-end text-white text-xs pr-3`}
      >
        75%
      </div>
    </div>
  );
};

export default ProgressBar;
