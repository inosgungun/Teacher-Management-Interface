"use client";

import { FC } from "react";

interface HistoryItem {
  description: string;
  date: string;
}

const historyData: HistoryItem[] = [
  { description: "Edited lesson on Advanced Algorithms", date: "2025-07-08 14:30" },
  { description: "Added new unscheduled lesson: Big Data & Hadoop", date: "2025-07-07 11:15" },
  { description: "Updated availability for Thursday", date: "2025-07-06 09:45" },
  { description: "Scheduled lesson: Cloud Computing with AWS", date: "2025-07-05 10:00" },
  { description: "Added comment: 'Great explanation on Dynamic Programming!'", date: "2025-07-04 13:20" },
  { description: "Created lesson: Deep Learning with Neural Networks", date: "2025-07-03 16:10" },
];

export const HistoryCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">History</h2>
      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="text-gray-800">{item.description}</p>
            <p className="text-sm text-gray-600 mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
