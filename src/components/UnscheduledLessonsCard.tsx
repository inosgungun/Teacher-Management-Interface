"use client";

import { FC, useState } from "react";

interface UnscheduledLesson {
  topic: string;
  date?: string;
  time?: string;
}

const initialLessons: UnscheduledLesson[] = [
  { topic: "Graph Theory Applications" },
  { topic: "Advanced React Patterns" },
  { topic: "Kubernetes & Docker" },
  { topic: "Natural Language Processing Basics" },
  { topic: "Big Data & Hadoop" },
];

export const UnscheduledLessonsCard: FC = () => {
  const [lessons, setLessons] = useState<UnscheduledLesson[]>(initialLessons);

  const handleDateChange = (index: number, value: string) => {
    const updated = [...lessons];
    updated[index].date = value;
    setLessons(updated);
  };

  const handleTimeChange = (index: number, value: string) => {
    const updated = [...lessons];
    updated[index].time = value;
    setLessons(updated);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">Unscheduled Lessons</h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="font-medium mb-2">{lesson.topic}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="date"
                value={lesson.date || ""}
                onChange={(e) => handleDateChange(index, e.target.value)}
                className="border rounded px-2 py-1 flex-1"
              />
              <input
                type="time"
                value={lesson.time || ""}
                onChange={(e) => handleTimeChange(index, e.target.value)}
                className="border rounded px-2 py-1 flex-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
