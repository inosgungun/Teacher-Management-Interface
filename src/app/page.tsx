import { ContactCard } from "@/components/ContactCard";
import { Header } from "@/components/Header";
import { PrivateQualifications } from "@/components/PrivateQualifications";
import { TeacherDetailCard } from "@/components/TeacherDetailCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center space-x-2 p-4">
        <p className="text-blue-500 text-2xl font-semibold">Teachers</p>
        <span className="text-2xl">/ Gungun Soni</span>
        <img src="/images/boy.png" alt="profile" className="w-8 h-8 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 p-4">
        
        <div className="flex flex-col gap-4 flex-1">
          <TeacherDetailCard />
          <PrivateQualifications />
        </div>

        <div className="flex-1">
          <ContactCard />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Group Qualifications</h2>
        <div>Group qualifications content here...</div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Complete Visual Dashboard</h2>
        <div>Dashboard content here...</div>
      </div>
    </div>
  );
}

