"use client";
import React, { ReactNode } from "react";
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
      className={` transition-all rounded-lg hover:bg-[#0556ac] duration-500 block py-4 w-full  ${
        loading ? "bg-[#80808036] text-black" : "text-white bg-primary"
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{loading ? "Loading...." : title}</span>
      {loading ? (
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
      ) : (
        icon && <FontAwesomeIcon icon={icon} />
      )}
    </button>
  );
};

export default Button;
