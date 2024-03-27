import React from "react";
import Input from "../micro/Input";
import Button from "../micro/Button";

const AddBusiness = () => {
  return (
    <div>
      <h3 className="font-medium text-[20px] mb-6">Add Business</h3>
      <Input
        type="text"
        placeholder="Enter product name"
        label="Business Name"
        name="name"
      />
      <Input
        type="text"
        placeholder="P567B"
        label="Business Code"
        name="code"
        span="(3 digit alphanumeric)"
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

      <Button loading={false} title="Create Business" />
    </div>
  );
};

export default AddBusiness;
