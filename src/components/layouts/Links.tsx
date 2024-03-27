import { Link, useLocation } from "react-router-dom";

import { Grid3 } from "iconsax-react";

const Links = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="mt-[1rem]">
      <Link
        className={`flex gap-1 md:gap-2 mb-[10px] items-center } py-3 pl-2 rounded-md   ${
          pathname === "/" &&
          "bg-[#EBF8FE] text-primary border-r-[3px] border-primary"
        } `}
        to="/"
      >
        <Grid3 size="22" />
        <span className="">Dashboard</span>
      </Link>
      <Link
        className={`flex gap-1 md:gap-2 mb-[10px] items-center } py-3 pl-2 rounded-md   ${
          pathname === "/business" &&
          "bg-[#EBF8FE] text-primary border-r-[3px] border-primary"
        } `}
        to="/business"
      >
        <Grid3 size="22" />
        <span className="text-black">Businesses</span>
      </Link>
      <Link
        className={`flex gap-1 md:gap-2 mb-[10px] items-center } py-3 pl-2 rounded-md   ${
          pathname === "/products" &&
          "bg-[#EBF8FE] text-primary border-r-[3px] border-primary"
        } `}
        to="/products"
      >
        <Grid3 size="22" />
        <span className="">Products</span>
      </Link>
      <Link
        className={`flex gap-2 mb-[10px] items-center } py-3 pl-2 rounded-2xl`}
        to="/"
      >
        <Grid3 size="22" />
        <span>Billing </span>
      </Link>

      <Link
        className={`flex gap-2 mb-[10px] items-center  py-3 pl-2 rounded-2xl`}
        to="/"
      >
        <Grid3 size="22" />
        <span>Reports</span>
      </Link>
    </div>
  );
};

export default Links;
