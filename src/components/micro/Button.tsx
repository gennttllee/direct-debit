"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type data = {
  title: string;
  loading: boolean;
  icon?: IconProp;
  onClick?: () => void;
};

const Button = ({ title, icon, loading, onClick }: data) => {
  return (
    <button
      disabled={loading}
      className={` transition-all rounded-lg hover:bg-[#0556ac] duration-500 py-3 w-full flex gap-2 items-center justify-center ${
        loading ? "bg-[#80808036] text-black" : "text-white bg-primary"
      }`}
      onClick={onClick}
    >
      {loading ? (
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
      ) : (
        icon && <FontAwesomeIcon icon={icon} />
      )}
      <span className="">{loading ? "Loading...." : title}</span>
    </button>
  );
};

export default Button;
