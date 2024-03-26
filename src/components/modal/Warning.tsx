import { RootState } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Trash } from "iconsax-react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slice/modalSlice";

const Warning = () => {
  const dispatch = useDispatch();
  const { warning } = useSelector((state: RootState) => state.modal);

  return (
    <div>
      <div className="flex gap-3 items-center mb-5">
        <button className="ml-auto" onClick={() => dispatch(closeModal())}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="p-[1rem] w-fit mx-auto rounded-full bg-[#ff00001d] text-[red]">
        <Trash size="26" />
      </div>
      <h3 className="text-center mt-4 font-bold text-[1.3rem]">
        {warning.title}
      </h3>
      <p className="font-light text-center leading-tight text-[14px]">
        {warning.content}
      </p>
      <div className="flex mt-5"></div>
    </div>
  );
};

export default Warning;
