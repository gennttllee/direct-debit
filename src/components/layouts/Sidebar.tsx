import React from "react";
import Links from "../../components/layouts/Links";

const Sidebar = () => {
  return (
    <section className=" hidden  md:block h-full md:w-[25%] xl:w-[17%] lg:w-[20%] shrink-0 py-2 pl-[2rem] border-r">
      <div className="sticky top-[1rem]">
        <Links />
      </div>
    </section>
  );
};

export default Sidebar;
