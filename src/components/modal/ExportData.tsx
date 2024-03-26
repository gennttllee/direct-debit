import React from "react";
import Button from "../micro/Button";

const ExportData = () => {
  return (
    <div>
      <h3 className="font-medium text-[20px] mb-6">Export Data</h3>

      <div className="mb-8">
        <p className="font-light">EXPORT AS</p>
        <div className="mt-4 text-[1.2rem]">
          <div className="flex items-center gap-4 mb-6">
            <input
              className="scale-[1.5]"
              type="radio"
              name="status"
              id="pdf"
              value={"pdf"}
            />
            <label className="flex items-center gap-3 font-light" htmlFor="pdf">
              PDF File
              <img
                className="w-[2rem]"
                src={require("../../assets/File type icon (3).png")}
                alt="pdf"
              />
            </label>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <input
              className="scale-[1.5]"
              type="radio"
              name="status"
              id="csv"
              value={"csv"}
            />
            <label className="flex items-center gap-2 font-light" htmlFor="csv">
              CSV File
              <img
                className="w-[2rem]"
                src={require("../../assets/File type icon (4).png")}
                alt="pdf"
              />
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              className="scale-[1.5]"
              type="radio"
              name="status"
              id="excel"
              value={"excel"}
            />
            <label
              className="flex gap-2 items-center font-light"
              htmlFor="excel"
            >
              Excel File
              <img
                className="w-[2rem]"
                src={require("../../assets/File type icon (5).png")}
                alt="pdf"
              />
            </label>
          </div>
        </div>
      </div>

      <Button loading={false} title="Export Data" />
    </div>
  );
};

export default ExportData;
