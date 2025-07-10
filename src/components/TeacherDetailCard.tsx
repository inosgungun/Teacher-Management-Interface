"use client";

import { FC, useState } from "react";
import { Pencil, ChevronDown } from "lucide-react";

export const TeacherDetailCard: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Example state to hold editable values
  const [teacherInfo, setTeacherInfo] = useState({
    name: "Gungun Soni",
    role: "Teacher",
    birthDate: "January 6, 2003"
  });

  const handleChange = (field: keyof typeof teacherInfo, value: string) => {
    setTeacherInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">Details</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            aria-label="Edit details"
            className="hover:text-gray-600 transition"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Info Fields */}
      <div className="space-y-3">
        {/* Name */}
        <div className="flex justify-between">
          <span className="text-gray-500">Name</span>
          {isEditing ? (
            <input
              type="text"
              value={teacherInfo.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border rounded px-1 text-black w-1/2"
            />
          ) : (
            <span>{teacherInfo.name}</span>
          )}
        </div>

        {/* Role */}
        <div className="flex justify-between">
          <span className="text-gray-500">Role</span>
          {isEditing ? (
            <input
              type="text"
              value={teacherInfo.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="border rounded px-1 text-black w-1/2"
            />
          ) : (
            <span>{teacherInfo.role}</span>
          )}
        </div>

        {/* Birth Date */}
        <div className="flex justify-between">
          <span className="text-gray-500">Birth Date</span>
          {isEditing ? (
            <input
              type="text"
              value={teacherInfo.birthDate}
              onChange={(e) => handleChange("birthDate", e.target.value)}
              className="border rounded px-1 text-black w-1/2"
            />
          ) : (
            <span>{teacherInfo.birthDate}</span>
          )}
        </div>
      </div>
    </div>
  );
};
