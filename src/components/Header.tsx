"use client";

import { FC } from "react";
import { Menu } from "lucide-react";

export const Header: FC = () => {
  return (
    <header className="bg-red-600 text-white px-4 py-3 flex items-center justify-between">

      <div className="flex items-center space-x-3">
        <button
          aria-label="Open sidebar"
          className="p-2 rounded hover:bg-red-500 transition"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        <div className="bg-white text-black rounded px-2">
          <select
            id="myDropdown"
            name="myDropdown"
            className="bg-white p-1 outline-none"
          >
            <option value="">Gungun Soni</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <img
          src="/images/boy.png"
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <h3 className="font-semibold text-sm">Gungun</h3>
          <p className="text-xs">gungun@gmail.com</p>
        </div>
      </div>
    </header>
  );
};
