import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState } from "react";

type input = {
  label?: string;
  type: "email" | "password" | "text" | "tel" | "number" | "date";
  placeholder: string;
  name: string;
  value?: string | number;
  inputMode?: "email" | "search" | "text" | "tel" | "numeric";
  onFocus?: () => void;
  className?: string;
  readOnly?: boolean;
  span?: string;
  onBlur?: () => void;
  onKeyDown?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef(
  (
    {
      label,
      type,
      placeholder,
      name,
      inputMode,
      value,
      className,
      onBlur,
      onKeyDown,
      readOnly,
      span,
      onFocus,
      onChange,
    }: input,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const [show, setShow] = useState("");

    useEffect(() => {
      setShow(type);
    }, [type]);

    const setClick = () => {
      if (show == "password") {
        setShow("text");
        return;
      }
      setShow("password");
    };

    return (
      <div className="mb-[1rem] block text-black">
        {label && (
          <label className="capitalize text-[14px] mb-1 block" htmlFor={name}>
            {label}
            {span && (
              <span className="text-secondary font-light ml-1">{span}</span>
            )}
          </label>
        )}
        <div className="flex items-center justify-between">
          <input
            className={`block ${className} border px-[1rem] w-full  py-3 focus:border-[gray] outline-none  hover:border-[gray] border-[#FFFFFF1F] bg-[#F3F5F6]`}
            type={show}
            value={value}
            placeholder={placeholder}
            id={name}
            autoComplete="new-password"
            autoCorrect="off"
            required
            onKeyDown={onKeyDown}
            readOnly={readOnly}
            role="presentation"
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            ref={ref}
            name={name}
            inputMode={inputMode}
          />
          {type == "password" && (
            <span onClick={setClick}>
              <FontAwesomeIcon icon={show == "text" ? faEye : faEyeSlash} />
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
