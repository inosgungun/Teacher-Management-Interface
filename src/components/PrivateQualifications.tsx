"use client";

import { FC, useState } from "react";
import { Pencil, ChevronDown } from "lucide-react";

interface Qualification {
  name: string;
  rate: number;
}

export const PrivateQualifications: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [qualifications, setQualifications] = useState<Qualification[]>([
    { name: "Vocal Contemporary", rate: 28 },
    { name: "Vocal Core", rate: 40 },
    { name: "Vocal Hybrid", rate: 30 },
    { name: "Vocal Plus", rate: 50 },
  ]);

  const handleRateChange = (index: number, newRate: number) => {
    setQualifications((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, rate: newRate } : item
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">Private Qualifications</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            aria-label="Edit qualifications"
            className="hover:text-gray-600 transition"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {qualifications.map((qual, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{qual.name}</span>
            {isEditing ? (
              <input
                type="number"
                value={qual.rate}
                onChange={(e) => handleRateChange(index, parseFloat(e.target.value))}
                className="border rounded px-1 text-black w-16"
              />
            ) : (
              <span>${qual.rate.toFixed(2)}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
