import { useState } from "react";
import Layout from "./components/layouts/layout";
import { history } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const currentD = new Date();
  const year = currentD.getFullYear();
  const month = String(currentD.getMonth() + 1).padStart(2, "0");
  const day = String(currentD.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState({
    from: formattedDate,
    to: formattedDate,
  });

  return (
    <Layout>
      <div className="mt-[1rem] p-[1rem]">
        <h1 className="mb-3">Select Date</h1>
        <input
          type="date"
          onChange={(e) =>
            setDate((dat) => {
              return { ...dat, to: e.target.value };
            })
          }
          value={date.to}
          className="bg-[#F3F5F6] text-[gray] flex items-center shrink-0 w-[31%] lg:w-[23%] h-[2.6rem] md:h-[2.85rem] focus:outline-primary px-2"
        />

        <div className="flex gap-3 justify-between mt-8 flex-wrap gap-y-4">
          <div className="w-full md:w-[48%] border rounded-lg p-[1rem]">
            <p className="text-secondary font-light">
              Number of Authorised Mandates (121)
            </p>
            <p className="text-[32px] font-semibold">₦4,564,321.54</p>
          </div>
          <div className="w-full md:w-[48%] border rounded-lg p-[1rem]">
            <p className="text-secondary font-light">Number of Debits (676)</p>
            <p className="text-[32px] font-semibold">₦4,459,402,201.35</p>
          </div>
        </div>

        <div className="w-full border rounded-lg p-[1rem] mt-8">
          <p className="font-medium text-[20px]">Last 10 Products</p>

          <div className="mt-5">
            <div className="flex bg-tertiary justify-between border-t px-[1rem] py-[.5rem] font-medium">
              <p className=" text-[#808080] shrink-0 w-[25%] md:w-[20%] py-2">
                Product
              </p>
              <p className=" text-[#808080] shrink-0 w-[10%] md:w-[10%] py-2">
                Business
              </p>
              <p className=" text-center md:text-left text-[#808080] w-[10%] md:w-[15%] shrink-0 py-2">
                Client Id
              </p>
              <p className=" text-[#808080] w-fit py-2 px-[17px] p-[5px]">
                Status
              </p>
              <p className=" text-[#808080] w-[1rem] md:w-[10%] py-2"></p>
            </div>
            {history.map((his, index) => (
              <div
                key={index}
                className="flex cursor-pointer hover:bg-hoverColor justify-between py-2 px-[1rem] text-[10px] md:text-[12px] lg:text-[14px] border-b  text-secondary items-center"
              >
                <p className="w-[25%] md:w-[20%]  shrink-0 ">{his.product}</p>
                <p className="w-[10%] md:w-[10%]  shrink-0">{his.business}</p>
                <p className="w-[10%] md:w-[15%] shrink-0 capitalize">
                  {his.clientId}
                </p>
                <p
                  className={`w-fit shrink-0 r capitalize px-[10px] p-[5px] flex items-center border rounded-lg ${
                    his.status === "active"
                      ? "bg-[#bef2b941] border-[#BEF2B9] text-[green]"
                      : "bg-[#f4b7b557] text-[#A4251A] border-[#F4B7B5]"
                  }`}
                >
                  <FontAwesomeIcon
                    className="text-[8px] mr-[10px]"
                    icon={faCircle}
                  />
                  {his.status}
                </p>
                <p className="w-fit shrink-0 text-primary md:w-[10%]">Edit</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
