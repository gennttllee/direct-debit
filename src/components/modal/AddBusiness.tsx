import React, { useState } from "react";
import Input from "../micro/Input";
import Button from "../micro/Button";
import { useAddBusinessMutation } from "../../store/services/api";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slice/modalSlice";
import { toast } from "../../store/slice/alertSlice";

const AddBusiness = () => {
  const dispatch = useDispatch();
  const [createBusiness] = useAddBusinessMutation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    active: true,
    name: "",
    code: "",
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    createBusiness(formData).then((res: any) => {
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
      <h3 className="font-medium text-[20px] mb-6">Add Business</h3>
      <Input
        type="text"
        placeholder="Enter product name"
        label="Business Name"
        name="name"
        onChange={(e) =>
          setFormData({ ...formData, name: e.currentTarget.value })
        }
        value={formData.name}
      />
      <Input
        type="text"
        placeholder="P567B"
        label="Business Code"
        name="code"
        span="(3 digit alphanumeric)"
        onChange={(e) =>
          setFormData({ ...formData, code: e.currentTarget.value })
        }
        value={formData.code}
      />

      <div className="mb-4">
        <p className="mb-3">Status</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              id="active"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: true })}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={!formData.active}
              name="status"
              id="inactive"
              onChange={(e) => setFormData({ ...formData, active: false })}
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
      </div>

      <Button loading={loading} title="Create Business" />
    </form>
  );
};

export default AddBusiness;
