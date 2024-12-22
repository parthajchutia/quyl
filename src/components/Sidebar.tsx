"use client";
import {
  HelpCircle,
  Home,
  Users,
  BookOpen,
  PieChart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("students");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "students", icon: Users, label: "Students" },
    { id: "chapter", icon: BookOpen, label: "Chapter" },
    { id: "help", icon: HelpCircle, label: "Help" },
    { id: "reports", icon: PieChart, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white border-r flex flex-col transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="p-6">
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
        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center space-x-3 px-4 py-3 mb-1 rounded-lg transition-colors cursor-pointer ${
                  activeItem === item.id
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon
                  size={20}
                  className={
                    activeItem === item.id ? "text-blue-600" : "text-gray-600"
                  }
                />
                <span
                  className={`font-medium ${
                    activeItem === item.id ? "text-blue-600" : ""
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

      {/* Hamburger Button */}
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
