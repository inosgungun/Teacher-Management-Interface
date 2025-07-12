"use client";

import { FC } from "react";

interface TimeAllocationItem {
  task: string;
  hoursPerWeek: number;
}

const timeAllocations: TimeAllocationItem[] = [
  { task: "Teaching Advanced Algorithms", hoursPerWeek: 6 },
  { task: "Machine Learning Sessions", hoursPerWeek: 4 },
  { task: "Student Doubt Solving", hoursPerWeek: 3 },
  { task: "Curriculum Planning", hoursPerWeek: 2 },
  { task: "Research & Development", hoursPerWeek: 5 },
  { task: "Meetings & Coordination", hoursPerWeek: 2 },
];

export const TimeAllocationCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">Time Allocation</h2>
      <div className="space-y-3">
        {timeAllocations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border rounded px-3 py-2 hover:bg-gray-50 transition"
          >
            <p className="font-medium">{item.task}</p>
            <p className="text-gray-700">{item.hoursPerWeek} hrs/week</p>
          </div>
        ))}
      </div>
    </div>
  );
};
