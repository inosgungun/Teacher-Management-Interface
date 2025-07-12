"use client";

import { FC } from "react";

interface Student {
  name: string;
  course: string;
  branch: string;
  year: string;
  college: string;
  email: string;
}

const students: Student[] = [
  { name: "Aarav Sharma", course: "B.Tech", branch: "CSE", year: "2021–2025", college: "JK Institute of Technology", email: "aarav.sharma@example.com" },
  { name: "Ananya Verma", course: "B.Sc", branch: "Physics", year: "2020–2023", college: "Bundelkhand University", email: "ananya.verma@example.com" },
  { name: "Ishaan Singh", course: "BBA", branch: "Marketing", year: "2022–2025", college: "Delhi Business School", email: "ishaan.singh@example.com" },
  { name: "Diya Patel", course: "BCA", branch: "Information Technology", year: "2021–2024", college: "JSS Noida", email: "diya.patel@example.com" },
  { name: "Vivaan Joshi", course: "B.Com", branch: "Finance", year: "2020–2023", college: "Hari Kishan College", email: "vivaan.joshi@example.com" },
  { name: "Myra Nair", course: "BA", branch: "English Literature", year: "2022–2025", college: "MNO Arts College", email: "myra.nair@example.com" },
  { name: "Kabir Rao", course: "B.Sc", branch: "Mathematics", year: "2021–2024", college: "MNIT Allahabad", email: "kabir.rao@example.com" },
  { name: "Aisha Mehta", course: "B.Tech", branch: "ECE", year: "2020–2024", college: "IIT Kanpur", email: "aisha.mehta@example.com" },
  { name: "Aryan Khanna", course: "BCA", branch: "Software Engineering", year: "2022–2025", college: "VWX College", email: "aryan.khanna@example.com" },
  { name: "Riya Kapoor", course: "B.Sc", branch: "Chemistry", year: "2021–2024", college: "YZA College", email: "riya.kapoor@example.com" },
  { name: "Krish Jain", course: "B.Com", branch: "Accounting", year: "2020–2023", college: "BCD College", email: "krish.jain@example.com" },
  { name: "Tara Das", course: "BA", branch: "History", year: "2022–2025", college: "EFG College", email: "tara.das@example.com" },
];

export const StudentListCard: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Students List</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">Name</th>
            <th className="border px-3 py-2 text-left">Course</th>
            <th className="border px-3 py-2 text-left">Branch</th>
            <th className="border px-3 py-2 text-left">Year/Session</th>
            <th className="border px-3 py-2 text-left">College</th>
            <th className="border px-3 py-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition">
              <td className="border px-3 py-2">{student.name}</td>
              <td className="border px-3 py-2">{student.course}</td>
              <td className="border px-3 py-2">{student.branch}</td>
              <td className="border px-3 py-2">{student.year}</td>
              <td className="border px-3 py-2">{student.college}</td>
              <td className="border px-3 py-2">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
