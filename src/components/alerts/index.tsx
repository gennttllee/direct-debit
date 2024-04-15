import React, { ReactNode, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Error from "./Error";
import Success from "./Success";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";
import { closeToast } from "../../store/slice/alertSlice";

type children = {
  children: ReactNode;
};

const Alerts = ({ children }: children) => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    if (error || success) {
      setTimeout(() => {
        dispatch(closeToast());
      }, 4000);
    }
  }, [dispatch, error, success]);

  const checker = () => {
    dispatch(closeToast());
  };

  return (
    <>
      {children}
      <AnimatePresence>
        {error || success ? (
          <section
            onClick={checker}
            className="w-full h-screen cursor-pointer z-[2]  fixed top-0 left-0 right-0 flex justify-center items-start"
          >
            <motion.div
              key={nanoid()}
              initial={{ y: -500, scale: 0.75 }}
              animate={{ y: 0, scale: 1 }}
              exit={{
                scale: 0,
                y: -500,
                transition: { delay: 0, duration: 0.3 },
              }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              className="w-3/4 md:w-2/4 mt-[5%] bg-white rounded-lg overflow-hidden"
            >
              {error ? (
                <Error key={nanoid()} error={error} />
              ) : success ? (
                <Success key={nanoid()} success={success} />
              ) : null}
            </motion.div>
          </section>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default memo(Alerts);
