import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import "./styles.css";

const App = () => (
  <Router>
    <div className="min-h-screen bg-indigo-300 bg-opacity-20">
      {/* top bar */}
      <div className="px-6 bg-indigo-700 py-4 flex items-center justify-between">
        <h2 className="font-poppins font-bold text-white text-xl">TinyTaskr</h2>

        <div className="flex items-center gap-5">
          <Link
            className="font-quicksand text-white text-sm hover:bg-indigo-200 hover:bg-opacity-30 px-4 py-1 rounded-xl transition-all duration-300"
            to="/"
          >
            Manage Tasks
          </Link>
          <Link
            className="font-quicksand text-white text-sm hover:bg-indigo-200 hover:bg-opacity-30 px-4 py-1 rounded-xl transition-all duration-300"
            to="/new-task"
          >
            New Task
          </Link>
        </div>
      </div>

      <div className="py-5 px-8">
        <Routes>
          <Route path={"/"} element={<Tasks />} />
          <Route path={"/new-task"} element={<NewTask />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
