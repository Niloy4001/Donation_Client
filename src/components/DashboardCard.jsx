import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
      <div className="text-4xl text-green-600">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
