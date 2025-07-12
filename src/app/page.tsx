"use client";

import { AdvancedLessonsCard } from "@/components/AdvancedLessonsCard";
import { CommentsCard } from "@/components/CommentsCard";
import { ContactCard } from "@/components/ContactCard";
import { DashboardButtonCards } from "@/components/DashboardButtons";
import { EditableAvailabilityChart } from "@/components/EditableAvailabilityCard";
import { Header } from "@/components/Header";
import { HistoryCard } from "@/components/HistoryCard";
import { PrivateQualifications } from "@/components/PrivateQualifications";
import { ScheduledLessonsCard } from "@/components/ScheduledLessonsCard";
import { StudentListCard } from "@/components/StudentListCard";
import { TeacherDetailCard } from "@/components/TeacherDetailCard";
import { TimeAllocationCard } from "@/components/TimeAllocationCard";
import { UnscheduledLessonsCard } from "@/components/UnscheduledLessonsCard";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Availability");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-50">
      <Header />

      <div className="flex items-center space-x-2 p-4">
        <p className="text-gray-800 text-2xl font-bold">Teachers</p>
        <span className="text-2xl text-gray-700">/ Gungun</span>
        <img src="/images/boy.png" alt="profile" className="w-9 h-9 rounded-full border border-blue-400 shadow-sm" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4">

        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <TeacherDetailCard />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <PrivateQualifications />
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <ContactCard />
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-md shadow-lg m-4 rounded-2xl p-4 ">
        <DashboardButtonCards activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-4 space-y-4">
          {activeTab === "Availability" && (
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 shadow-inner">
              <EditableAvailabilityChart />
            </div>
          )}

          {activeTab === "Students" && (
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 shadow-inner">
              <StudentListCard />
            </div>
          )}

          {activeTab === "Schedule" && (
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-4 shadow-inner">
              <ScheduledLessonsCard />
            </div>
          )}

          {activeTab === "Advanced Lessons" && (
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 shadow-inner">
              <AdvancedLessonsCard />
            </div>
          )}

          {activeTab === "Unscheduled Lessons" && (
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-4 shadow-inner">
              <UnscheduledLessonsCard />
            </div>
          )}

          {activeTab === "Time Allocation" && (
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 shadow-inner">
              <TimeAllocationCard />
            </div>
          )}

          {activeTab === "Comments" && (
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 shadow-inner">
              <CommentsCard />
            </div>
          )}

          {activeTab === "History" && (
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-inner">
              <HistoryCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
