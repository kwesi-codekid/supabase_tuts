import React, { useState, useEffect } from "react";
import _supabase from "../database/supabase-client";
import TaskCard from "../components/TaskCard";
import Lottie from "react-lottie";
import animationData from "../lotties/animation_lnxaq2c7.json";

const Tasks = () => {
  // states
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await _supabase.from("tasks").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        setTasks(data);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="">
      <h1 className="font-poppins text-xl font-bold text-indigo-700">
        Manage Tasks
      </h1>

      {loading === true ? (
        <Lottie options={defaultOptions} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 py-4">
          {tasks && tasks.map((task) => <TaskCard task={task} />)}
        </div>
      )}
    </div>
  );
};

export default Tasks;
