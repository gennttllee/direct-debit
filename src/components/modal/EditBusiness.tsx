import React, { useState } from "react";
import Input from "../micro/Input";
import Button from "../micro/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { businessHistory } from "../../data";
import {
  useEditBusinessMutation,
  useEditBusinessStatusMutation,
} from "../../store/services/api";
import { closeModal } from "../../store/slice/modalSlice";
import { toast } from "../../store/slice/alertSlice";

const EditBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [updateBusiness] = useEditBusinessMutation();
  const [editBusinessStatus] = useEditBusinessStatusMutation();
  const dispatch = useDispatch();
  const { custom, singleRoute } = useSelector(
    (state: RootState) => state.modal
  );
  const route = custom.find((cus) => cus.name === singleRoute);
  const [formData, setFormData] = useState<(typeof businessHistory)[0]>(
    route?.sendData
  );

  const editBusiness = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    updateBusiness(formData).then((res: any) => {
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

  const updateStatus = (status: boolean) => {
    setLoading(true);
    editBusinessStatus({ active: status, id: formData.id }).then((res: any) => {
      setLoading(false);
      if (res?.error) {
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
      dispatch(toast({ variant: "success", message: "successfull" }));
      setFormData({ ...formData, active: status });
    });
  };

  return (
    <form onSubmit={editBusiness}>
      <h3 className="font-medium text-[20px] mb-6">Edit Business</h3>
      <Input
        type="text"
        placeholder="Enter product name"
        label="Business Name"
        onChange={(e) =>
          setFormData({ ...formData, name: e.currentTarget.value })
        }
        name="name"
        value={formData?.name}
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
        value={formData?.code}
      />

      <div className="mb-4">
        <p className="mb-3">Status</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              onChange={() => updateStatus(true)}
              id="active"
              checked={formData.active}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              id="inactive"
              onChange={() => updateStatus(false)}
              checked={!formData.active}
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
      </div>

      <Button loading={loading} title="Save Changes" />
    </form>
  );
};

export default EditBusiness;
