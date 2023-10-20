import React, { useState } from "react";
import _supabase from "../database/supabase-client";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const NewTask = () => {
  // states
  const [values, setValues] = useState({
    title: "",
    description: "",
    priority: "",
    status: "pending"
  });
  const [errors, setErrors] = useState(null);
  const [disabled, setDisabled] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled("disabled");
    const { title, description, priority, status } = values;
    if (!title || !description || !priority) {
      setErrors("Please fill all details");
      return;
    }

    await messageApi.open({
      type: "loading",
      content: "Saving task..."
    });

    const { data, error } = await _supabase
      .from("tasks")
      .insert({
        title: title,
        description: description,
        priority: priority,
        status: status
      })
      .select();

    if (data) {
      await message.success("Task added successfully");
      setDisabled("");
      navigate("/");
    }
    if (error) {
      setErrors("An error occurred while saving data. Please try again...");
    }
  };
  return (
    <div>
      {contextHolder}
      <h1 className="font-poppins text-xl font-bold text-indigo-700">
        Add New Task
      </h1>

      <div className="rounded-2xl bg-white px-8 py-6 mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-poppins text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="border outline-none rounded-lg px-3 py-1 font-quicksand text-gray-700"
              type="text"
              value={values.title}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  title: e.target.value
                }))
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-poppins text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="border outline-none rounded-lg px-3 py-1 font-quicksand text-gray-700"
              type="text"
              value={values.description}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  description: e.target.value
                }))
              }
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-poppins text-gray-700" htmlFor="priority">
              Priority
            </label>
            <select
              id="priority"
              className="border outline-none rounded-lg px-3 py-1 font-quicksand text-gray-700"
              type="text"
              value={values.priority}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  priority: e.target.value
                }))
              }
            >
              <option value="">-- Select priority --</option>
              <option value="1">High</option>
              <option value="2">Normal</option>
              <option value="3">Low</option>
            </select>
          </div>

          {errors && (
            <p className="text-red-500 font-quicksand text-sm">{errors}</p>
          )}

          <button
            type="submit"
            disabled={disabled}
            className="font-poppins hover:bg-indigo-600 transition-all duration-300 bg-indigo-700 disabled:bg-indigo-500 text-white py-1 px-12 w-max rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
