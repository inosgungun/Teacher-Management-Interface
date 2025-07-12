"use client";

import { FC } from "react";
import { Home, Settings, UserCog, Clock } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <span className="font-semibold text-lg">Menu</span>
        <button onClick={onClose} aria-label="Close sidebar" className="text-gray-700 hover:text-gray-900">
          ✕
        </button>
      </div>
      <nav className="flex flex-col mt-4 space-y-2 px-4">
        <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" />
        <SidebarItem icon={<Settings className="w-5 h-5" />} label="Setup" />
        <SidebarItem icon={<UserCog className="w-5 h-5" />} label="Admin" />
        <SidebarItem icon={<Clock className="w-5 h-5" />} label="Timeliner" />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, label }) => (
  <button className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-gray-100 text-left">
    {icon}
    <span>{label}</span>
  </button>
);
