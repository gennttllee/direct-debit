import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "../../store/slice/appSlice";
import { RootState } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Links from "./Links";

const MobileNav = () => {
  const dispatch = useDispatch();
  const { nav } = useSelector((state: RootState) => state.app);

  return (
    <section className="fixed top-0 z-[3] overflow-y-auto right-0 w-full bottom-0 h-full backdrop-blur-md bg-transparent">
      <div className="w-[70%] py-3 px-4 flex flex-col ml-auto h-full bg-white">
        <div className="flex justify-between items-center">
          {/* <Link href="/" className="flex items-center gap-2">
            <Image
              className=" w-[2rem]"
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <p className="text-[1.2rem] font-semibold">Data plus</p>
          </Link> */}
          <button
            onClick={() => dispatch(setNav(!nav))}
            className="border block text-[1.5rem] rounded-md border-[#80808092] py-1 px-3"
          >
            <FontAwesomeIcon className="text-[gray]" icon={faXmark} />
          </button>
        </div>

        <Links />
      </div>
    </section>
  );
};

export default MobileNav;
