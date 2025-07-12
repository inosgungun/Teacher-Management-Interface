"use client";

import { FC } from "react";

interface DashboardButtonCardsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardButtonCards: FC<DashboardButtonCardsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const buttons = [
    "Availability",
    "Students",
    "Schedule",
    "Advanced Lessons",
    "Unscheduled Lessons",
    "Time Allocation",
    "Comments",
    "History",
  ];

  return (
    <div className="bg-white shadow-md m-4 justify rounded-lg p-4 flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveTab(btn)}
          className={`px-3 py-1 rounded ${
            activeTab === btn ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
