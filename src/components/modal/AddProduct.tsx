import React, { useState } from "react";
import Input from "../micro/Input";
import Button from "../micro/Button";
import {
  useAddClientsMutation,
  useGetBusinessesQuery,
} from "../../store/services/api";
import { businessHistory } from "../../data";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slice/modalSlice";
import { toast } from "../../store/slice/alertSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetBusinessesQuery("");
  const [addClient] = useAddClientsMutation();
  const [formData, setFormData] = useState({
    businessId: "",
    name: "",
    code: "",
    passportId: "",
    active: true,
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    addClient(formData).then((res: any) => {
      setLoading(false);
      if (res.error) {
        dispatch(
          toast({
            variant: "error",
            message:
              res?.error?.data?.responseMessage ||
              res?.error?.data?.data ||
              "error",
          })
        );
        return;
      }
      dispatch(toast({ variant: "success", message: "successfully created" }));
      dispatch(closeModal());
    });
  };

  return (
    <form onSubmit={submitForm}>
      <h3 className="font-medium text-[20px] mb-6">Add Product</h3>
      <div className="mb-4">
        <label className="mb-1 block">Select Business</label>
        <select
          id="select"
          onChange={(e) =>
            setFormData({ ...formData, businessId: e.target.value })
          }
          className="w-full block capitalize outline-none border-b py-[.7rem] bg-[#F3F5F6] text-[gray]"
        >
          <option selected disabled hidden>
            -Please select-
          </option>
          {data?.map((cat: (typeof businessHistory)[0], index: number) => (
            <option value={cat?.id} key={index}>
              {cat?.name}
            </option>
          ))}
          d
        </select>
      </div>

      <Input
        type="text"
        placeholder="Enter product name"
        label="Product Name"
        name="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
      />
      <Input
        type="text"
        placeholder="P567B"
        label="Product Code"
        name="code"
        value={formData.code}
        span="(3 digit alphanumeric)"
        onChange={(e) => setFormData({ ...formData, code: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Enter client ID"
        label="Client ID"
        name="clientId"
        onChange={(e) =>
          setFormData({ ...formData, passportId: e.target.value })
        }
        value={formData.passportId}
      />

      <div className="mb-4">
        <p className="mb-3">Status</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              checked={formData.active}
              id="active"
              onChange={(e) => setFormData({ ...formData, active: true })}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              id="inactive"
              checked={!formData.active}
              onChange={(e) => setFormData({ ...formData, active: false })}
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
      </div>

      <Button loading={loading} title="Setup Product" />
    </form>
  );
};

export default AddProduct;
