import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/layout";
import { ExportSquare, SearchNormal1 } from "iconsax-react";
import { useDispatch } from "react-redux";
import { businessHistory } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { openModal } from "../store/slice/modalSlice";
import { useGetBusinessesQuery } from "../store/services/api";
import TableLoader from "../components/loaders/TableLoader";

const Business = () => {
  const { data, isLoading, isSuccess } = useGetBusinessesQuery("");
  const [business, setBusiness] = useState<typeof businessHistory>([]);
  const dispatch = useDispatch();
  const categories = ["all", "active", "inactive"];
  const currentD = new Date();
  const year = currentD.getFullYear();
  const month = String(currentD.getMonth() + 1).padStart(2, "0");
  const day = String(currentD.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState({
    from: formattedDate,
    to: formattedDate,
  });

  useEffect(() => {
    if (isSuccess) {
      setBusiness(data);
    }
  }, [data, isSuccess]);

  const addBusiness = async () => {
    dispatch(
      openModal({
        variant: "custom",
        custom: {
          name: "addBusiness",
          proceed: () => {},
        },
      })
    );
  };

  const exportData = () => {
    dispatch(
      openModal({
        variant: "custom",
        custom: {
          name: "exportData",
          proceed: () => {},
        },
      })
    );
  };

  const editBusiness = (biz: (typeof businessHistory)[0]) => {
    dispatch(
      openModal({
        variant: "custom",
        custom: {
          name: "editBusiness",
          sendData: biz,
          proceed: () => {},
        },
      })
    );
  };

  return (
    <Layout>
      <div className="mt-8">
        <div className="flex w-full gap-4 items-end justify-between lg:flex-nowrap flex-wrap">
          <div className="shrink-0 w-[67%] lg:w-[23%]">
            <h1 className="mb-1">Select Date</h1>
            <input
              type="date"
              onChange={(e) =>
                setDate((dat) => {
                  return { ...dat, to: e.target.value };
                })
              }
              value={date.to}
              className="bg-[#F3F5F6] text-[gray] flex items-center  focus:outline-primary px-2 h-[2.6rem] md:h-[2.85rem] w-full"
            />
          </div>

          <div className="w-[30%]">
            <label className="mb-1 block">Select Date</label>
            <select
              id="select"
              className="w-full block capitalize outline-none border-b py-[.7rem] bg-[#F3F5F6] px-[1rem]"
            >
              <option selected disabled hidden>
                -All-
              </option>
              {categories.map((cat, index) => (
                <option value={cat} key={index}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="shrink-0 w-[67%] lg:w-[45%] relative">
            <h1 className="mb-1">Search</h1>
            <input
              type="search"
              placeholder="Search"
              className="bg-[#F3F5F6] text-[gray] flex items-center  focus:outline-primary px-2 h-[2.6rem] md:h-[2.85rem] w-full pl-[3rem]"
            />
            <SearchNormal1
              className="absolute top-[53%] left-4"
              size="22"
              color="black"
            />
          </div>

          <button className="py-[.6rem] h-fit w-[30%] lg:w-[15%] shrink-0  rounded-lg bg-[#EBF8FE] border border-primary text-primary">
            Search
          </button>
        </div>

        <div className="w-full border rounded-lg p-[1rem] mt-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="font-medium text-[20px]"> Business</p>
              <p className="text-secondary">
                See a directory of all business on this platform
              </p>
            </div>
            <div className="text-black flex items-center gap-4 shrink-0">
              <button
                onClick={exportData}
                className="border py-3 px-8 flex items-center gap-4 rounded-lg"
              >
                <ExportSquare size="22" color="black" />
                <span> Export data</span>
              </button>
              <button
                onClick={addBusiness}
                className="py-3 px-8 bg-primary text-white rounded-lg"
              >
                Add Business
              </button>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex bg-tertiary justify-between border-t px-[1rem] py-[.5rem] font-medium">
              <p className=" text-[#808080] shrink-0 w-[25%] md:w-[15%] py-2">
                Business
              </p>
              <p className=" text-[#808080] shrink-0 w-[10%] md:w-[15%] py-2">
                Business Code
              </p>
              <p className=" text-center md:text-left text-[#808080] w-[10%] md:w-[15%] shrink-0 py-2">
                No. Of Products
              </p>
              <p className=" text-[#808080] w-fit py-2 px-[17px] p-[5px]">
                Status
              </p>
              <p className=" text-[#808080] w-[1rem] md:w-[10%] py-2"></p>
            </div>
            {isLoading ? (
              <TableLoader line={15} />
            ) : (
              business?.map(
                (his: (typeof businessHistory)[0], index: number) => (
                  <div
                    key={index}
                    className="flex cursor-pointer hover:bg-hoverColor justify-between py-2 px-[1rem] text-[10px] md:text-[12px] lg:text-[14px] border-b  text-secondary items-center"
                  >
                    <p className="w-[25%] md:w-[15%]  shrink-0 ">{his?.name}</p>
                    <p className="w-[10%] md:w-[15%]  shrink-0">{his?.code}</p>
                    <p className="w-[10%] md:w-[15%] shrink-0 capitalize">
                      Not set
                    </p>
                    <p
                      className={`w-fit shrink-0 r capitalize px-[10px] p-[5px] flex items-center border rounded-lg ${
                        his?.active
                          ? "bg-[#bef2b941] border-[#BEF2B9] text-[green]"
                          : "bg-[#f4b7b557] text-[#A4251A] border-[#F4B7B5]"
                      }`}
                    >
                      <FontAwesomeIcon
                        className="text-[8px] mr-[10px]"
                        icon={faCircle}
                      />
                      {his?.active ? "Active" : "Inactive"}
                    </p>
                    <button
                      onClick={() => editBusiness(his)}
                      className="w-fit shrink-0 text-black md:w-[10%]"
                    >
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default Business;
