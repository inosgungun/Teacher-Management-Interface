"use client";

import { FC, useState } from "react";

const times = [
  "7:30 AM - 8:00 AM", "8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM",
  "1:30 PM - 2:00 PM", "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM", "3:00 PM - 3:30 PM", "3:30 PM - 4:00 PM", "4:00 PM - 4:30 PM", "4:30 PM - 5:00 PM",
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const EditableAvailabilityChart: FC = () => {
  const [availability, setAvailability] = useState<boolean[][]>(
    () => Array(times.length).fill(null).map(() => Array(days.length).fill(false))
  );

  const toggleCell = (row: number, col: number) => {
    setAvailability(prev =>
      prev.map((timeRow, i) =>
        i === row
          ? timeRow.map((cell, j) => (j === col ? !cell : cell))
          : timeRow
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full mx-auto">
        <div className="overflow-x-auto">
      <table className="border-collapse min-w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-gray-100">Time</th>
            {days.map(day => (
              <th key={day} className="border px-2 py-1 bg-gray-100">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIdx) => (
            <tr key={time}>
              <td className="border px-2 py-1 text-center bg-gray-50 text-xs">{time}</td>
              {days.map((_, colIdx) => (
                <td
                  key={colIdx}
                  onClick={() => toggleCell(rowIdx, colIdx)}
                  className={`border w-24 h-8 cursor-pointer transition
                    ${availability[rowIdx][colIdx] ? "bg-green-400" : "bg-white"}
                    hover:bg-green-200`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
