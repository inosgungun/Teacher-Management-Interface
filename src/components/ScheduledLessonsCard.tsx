"use client";

import { FC } from "react";

interface Lesson {
  topic: string;
  time: string;
}

const lessons: Lesson[] = [
  { topic: "Data Structures: Trees & Graphs", time: "Monday, 9:00 AM - 10:30 AM" },
  { topic: "Object-Oriented Programming Concepts", time: "Monday, 11:00 AM - 12:30 PM" },
  { topic: "Database Management Systems", time: "Tuesday, 10:00 AM - 11:30 AM" },
  { topic: "Algorithms: Sorting & Searching", time: "Wednesday, 9:00 AM - 10:30 AM" },
  { topic: "Operating Systems Basics", time: "Thursday, 11:00 AM - 12:30 PM" },
  { topic: "Web Development: React & Next.js", time: "Friday, 2:00 PM - 3:30 PM" },
  { topic: "Software Engineering Principles", time: "Saturday, 10:00 AM - 11:30 AM" },
  { topic: "Computer Networks Overview", time: "Sunday, 9:00 AM - 10:30 AM" },
];

export const ScheduledLessonsCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold mb-4">Scheduled Lessons</h2>
      <div className="space-y-3">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="font-medium">{lesson.topic}</p>
            <p className="text-sm text-gray-600">{lesson.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
