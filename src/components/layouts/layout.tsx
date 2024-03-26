import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type children = {
  children: ReactNode;
};

const Layout = ({ children }: children) => {
  const { nav } = useSelector((state: RootState) => state.app);

  return (
    <section
      className={`bg-grad bg-cover bg-blend-lighten bg-[#ffffff3c] bg-right flex w-full h-screen`}
    >
      <Sidebar />
      <section className="w-full md:w-[75%] lg:w-[80%] xl:w-[83%] shrink-0 overflow-y-auto">
        {children}
      </section>
      {nav && <MobileNav />}
    </section>
  );
};

export default Layout;
