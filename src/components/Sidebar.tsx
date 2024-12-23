"use client";
import {
  HelpCircle,
  CircleGauge,
  BookOpenText,
  Album,
  PieChart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("students");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navItems = [
    { id: "dashboard", icon: CircleGauge, label: "Dashboard" },
    { id: "students", icon: BookOpenText, label: "Students" },
    { id: "chapter", icon: Album, label: "Chapter" },
    { id: "help", icon: HelpCircle, label: "Help" },
    { id: "reports", icon: PieChart, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex  ">
      
      <div
        className={`fixed inset-y-0 left-0 flex flex-col transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0 " : " -translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="p-6 bg-white">
          {/* Sidebar Header */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/Vector.png"
              alt="Description of the image"
              height={100}
              width={100}
              className="rounded-lg bg-white"
            />
          </div>
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center space-x-3 px-4 py-3 mb-1 rounded-lg transition-colors cursor-pointer ${
                  activeItem === item.id
                    ? "bg-white text-gray-950"
                    : "text-gray-900 hover:bg-gray-500"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon
                  size={20}
                  className={
                    activeItem === item.id ? "text-gray-950 font-extrabold" : "text-gray-600"
                  }
                />
                <span
                  className={`font-medium ${
                    activeItem === item.id ? "text-gray-950 font-bold" : ""
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Content Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md focus:outline-none"
      >
        <ChevronRight
          size={20}
          className={isSidebarOpen ? "transform rotate-180" : ""}
        />
      </button>
    </div>
  );
};

export default Sidebar;
