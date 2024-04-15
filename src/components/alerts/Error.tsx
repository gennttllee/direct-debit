import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type error = {
  error: string;
};

const Error = ({ error }: error) => {
  return (
    <div className="border-2 border-l-[10px] border-l-[rgb(255,0,0)] bg-[#f4b7b537]  border-[#F4B7B5] p-[1rem] rounded-lg md:pl-[2rem]">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[1.2rem] leading-none lg:text-[1.5rem] font-medium text-[#A4251A]">
          Error
        </p>
        <button className="">
          <FontAwesomeIcon className="scale-[1.6] text-[gray]" icon={faXmark} />
        </button>
      </div>

      <p className="capitalize leading-tight mb-2">{error}</p>
    </div>
  );
};

export default memo(Error);
