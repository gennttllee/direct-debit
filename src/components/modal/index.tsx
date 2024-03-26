import { RootState } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Warning from "./Warning";
import Custom from "./Custom";
import { closeModal } from "../../store/slice/modalSlice";
import Dialog from "./Dialog";

type children = {
  children: ReactNode;
};

const Index = ({ children }: children) => {
  const dispatch = useDispatch();
  const { warning, custom, dialog } = useSelector(
    (state: RootState) => state.modal
  );

  useEffect(() => {
    const listen = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", listen);

    return () => {
      window.removeEventListener("keydown", listen);
    };
  }, [dispatch]);

  return (
    <>
      {children}
      <AnimatePresence>
        {custom[0]?.name && (
          <div className="w-full backdrop-blur-[8px] h-[100dvh] cursor-pointer z-[2]  fixed top-0 left-0 right-0 flex items-center justify-center bg-[#0000002c] ">
            <motion.dialog
              open
              key={nanoid()}
              initial={{ y: 0, scale: 0.75 }}
              animate={{ y: -10, scale: 1 }}
              exit={{ scale: 0, y: 0, transition: { delay: 0, duration: 0.3 } }}
              transition={{
                duration: 0.5,
                type: "spring",
              }}
              className={` max-h-[90vh] rounded-xl overflow-y-auto shadow-lg border w-11/12 md:p-[1.2rem] p-[1rem] md:w-[28rem] bg-white`}
            >
              {warning.title ? (
                <Warning />
              ) : dialog.title ? (
                <Dialog />
              ) : custom[0]?.name ? (
                <Custom />
              ) : null}
            </motion.dialog>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
