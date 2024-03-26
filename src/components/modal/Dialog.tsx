import { closeModal } from "../../store/slice/modalSlice";
import { faAngleLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Archive } from "iconsax-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Dialog = () => {
  const { dialog } = useSelector((state: RootState) => state.modal);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-3 items-center mb-5">
        <button className="ml-auto" onClick={() => dispatch(closeModal())}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="p-[1rem] w-fit mx-auto rounded-full bg-[#0800ff1d] text-primary">
        <Archive size="26" />
      </div>
      <h3 className="text-center mt-4 capitalize font-bold text-[1.3rem]">
        {dialog.title}
      </h3>
      <p className="font-light text-center leading-tight text-[14px]">
        {dialog.content}
      </p>
      <div className="flex mt-5 gap-4"></div>
    </div>
  );
};

export default Dialog;
