import React from "react";
import Nav from "../../other/Nav";

const AdminDashboard = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Nav />
      <div className="bg-white p-5 m-5 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold p-2 text-gray-900">
          Admin Dashboard: Create New Task
        </h2>
        <div className="p-3 flex justify-between text-gray-900">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-xl font-semibold">Task Title</h3>
              <input
                className="bg-white rounded-xl font-semibold shadow-lg p-2"
                type="text"
                placeholder="Make A UI Design"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Date</h3>
              <input
                className="bg-white rounded-xl font-semibold shadow-lg p-2"
                type="text"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Assign To</h3>
              <input
                className="bg-white rounded-xl shadow-lg p-2"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Category</h3>
              <input
                className="bg-white rounded-xl shadow-lg p-2"
                type="text"
                placeholder="dev, design, etc."
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Description</h3>
            <textarea
              className="bg-white rounded-xl shadow-lg p-2"
              placeholder="Task Details"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white rounded-xl font-semibold shadow-lg px-5 py-3 hover:bg-blue-700">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
