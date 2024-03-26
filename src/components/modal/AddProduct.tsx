import React from "react";
import Input from "../micro/Input";
import Button from "../micro/Button";

const AddProduct = () => {
  const categories = ["all", "active", "inactive"];

  return (
    <div>
      <h3 className="font-medium text-[20px] mb-6">Add Product</h3>
      <div className="mb-4">
        <label className="mb-1 block">Select Business</label>
        <select
          id="select"
          className="w-full block capitalize outline-none border-b py-[.7rem] bg-[#F3F5F6] text-[gray]"
        >
          <option selected disabled hidden>
            -Please select-
          </option>
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <Input
        type="text"
        placeholder="Enter product name"
        label="Product Name"
        name="name"
      />
      <Input
        type="text"
        placeholder="P567B"
        label="Product Code"
        name="code"
        span="(3 digit alphanumeric)"
      />
      <Input
        type="text"
        placeholder="Enter client ID"
        label="Client ID"
        name="clientId"
      />

      <div className="mb-4">
        <p className="mb-3">Status</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <input type="radio" name="status" id="active" value={"active"} />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="status" id="inactive" value={"active"} />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
      </div>

      <Button loading={false} title="Setup Product" />
    </div>
  );
};

export default AddProduct;
