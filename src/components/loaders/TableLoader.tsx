import React from "react";

const TableLoader = ({ line }: { line: number }) => {
  return (
    <div className="w-full">
      {[...Array(line)].map((i, index) => (
        <div
          key={index}
          className="flex justify-between py-2 px-[1rem] border-b items-center animate-pulse"
        >
          <div className="w-[25%] md:w-[20%] h-[1rem]  shrink-0 animate-pulse bg-tertiary"></div>
          <div className="w-[10%] md:w-[10%] h-[1rem] bg-tertiary shrink-0 animate-pulse"></div>
          <div className="w-[10%] md:w-[15%] h-[1rem] bg-tertiary shrink-0 capitalize animate-pulse"></div>
          <div
            className={`w-[8%] shrink-0 r capitalize px-[10px] p-[5px] flex items-center border rounded-lg animate-pulse bg-tertiary h-[1rem]`}
          ></div>
          <div className="w-[5%] h-[1rem] bg-tertiary shrink-0 text-primary md:w-[10%] animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default TableLoader;
