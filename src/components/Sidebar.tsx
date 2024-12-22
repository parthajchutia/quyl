"use client";
import {
  Search,
  HelpCircle,
  BarChart2,
  Bell,
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
  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "students", icon: Users, label: "Students" },
    { id: "chapter", icon: BookOpen, label: "Chapter" },
    { id: "help", icon: HelpCircle, label: "Help" },
    { id: "reports", icon: PieChart, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      {" "}
      <div className="p-6">
        {" "}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/Vector.png"
            alt="Description of the image"
            height={100}
            width={100}
            
            className="rounded-lg  bg-white"
          ></Image>
        </div>{" "}
      </div>{" "}
      <nav className="flex-1 px-4">
        {" "}
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
              {" "}
              <Icon
                size={20}
                className={
                  activeItem === item.id ? "text-blue-600" : "text-gray-600"
                }
              />{" "}
              <span
                className={`font-medium ${
                  activeItem === item.id ? "text-blue-600" : ""
                }`}
              >
                {" "}
                {item.label}{" "}
              </span>{" "}
            </div>
          );
        })}{" "}
      </nav>{" "}
    </div>
  );
};

export default Sidebar;
