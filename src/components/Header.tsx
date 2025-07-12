"use client";

import { FC, useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export const Header: FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-600 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">

          <button
            aria-label="Open sidebar"
            className="p-2 rounded hover:bg-red-500 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>

          <div className="bg-white text-black rounded px-2">
            <select id="myDropdown" name="myDropdown" className="bg-white p-1 outline-none">
              <option value="">Gungun Soni</option>
              <option value="option1">Anshika Gupta</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="/images/boy.png"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block text-left">
            <h3 className="font-semibold text-sm">Gungun Soni</h3>
            <p className="text-xs">gungun@gmail.com</p>
          </div>
        </div>

      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};
