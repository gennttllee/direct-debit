import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

type success = {
  success: string;
};

const Success = ({ success }: success) => {
  return (
    <div className="border-2 border-l-[10px] border-l-[#519E47] bg-[#F1FEF1] border-[#BEF2B9] p-[1rem] rounded-lg md:pl-[2rem]">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[1.2rem] leading-none lg:text-[1.5rem] font-medium text-[green]">
          Success
        </p>
        <button className="">
          <FontAwesomeIcon className="scale-[1.6] text-[gray]" icon={faXmark} />
        </button>
      </div>

      <p className="capitalize leading-tight mb-2">{success}</p>
    </div>
  );
};

export default memo(Success);
