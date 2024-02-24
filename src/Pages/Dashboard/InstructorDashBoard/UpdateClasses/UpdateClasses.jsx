import React from "react";
import FormItem from "../../Components/FormItem/FormItem";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateClasses = () => {
  const data = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddItem = (item) => {
    axiosSecure.patch(`/update-classes/${data._id}`, item).then((res) => {
      if (res.data.acknowledged) {
        swal("SuccessFul Update", "", "success");
        navigate("/dashboard/instructor-manage-all-classes");
      }
    });
  };
  return (
    <div>
      <FormItem
        handing={"Update Course"}
        handleSubmit={handleSubmit}
        handleItem={handleAddItem}
        register={register}
        errors={errors}
        data={data}
      />
    </div>
  );
};

export default UpdateClasses;
