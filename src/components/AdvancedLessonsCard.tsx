"use client";

import { FC } from "react";

interface AdvancedLesson {
  topic: string;
  date: string;
  time: string;
}

const advancedLessons: AdvancedLesson[] = [
  { topic: "Advanced Algorithms: Dynamic Programming", date: "2025-07-20", time: "10:00 AM - 11:30 AM" },
  { topic: "Machine Learning Fundamentals", date: "2025-07-22", time: "2:00 PM - 3:30 PM" },
  { topic: "System Design Principles", date: "2025-07-24", time: "11:00 AM - 12:30 PM" },
  { topic: "Cloud Computing with AWS", date: "2025-07-26", time: "9:00 AM - 10:30 AM" },
  { topic: "Advanced Database Optimization", date: "2025-07-28", time: "1:00 PM - 2:30 PM" },
  { topic: "Deep Learning with Neural Networks", date: "2025-07-30", time: "3:00 PM - 4:30 PM" },
];

export const AdvancedLessonsCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">Advanced Lessons</h2>
      <div className="space-y-3">
        {advancedLessons.map((lesson, index) => (
          <div
            key={index}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="font-medium">{lesson.topic}</p>
            <p className="text-sm text-gray-600">📅 {lesson.date}</p>
            <p className="text-sm text-gray-600">🕒 {lesson.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
