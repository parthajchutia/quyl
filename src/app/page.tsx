"use client";

import { useState } from "react";
import AddStudentModal from "../components/AddStudentModel";
import StudentTable from "../components/StudentTable";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import Navigation from "../components/nav";
import { ChevronDown, Plus } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

export default function StudentManagementPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedYear, setSelectedYear] = useState("AY 2024-25");
  const [selectedGrade, setSelectedGrade] = useState("CBSE 9");

  const academicYears: FilterOption[] = [
    { label: "AY 2024-25", value: "AY 2024-25" },
    { label: "AY 2023-24", value: "AY 2023-24" },
    { label: "AY 2022-23", value: "AY 2022-23" },
  ];

  const grades: FilterOption[] = [
    { label: "CBSE 9", value: "CBSE 9" },
    { label: "CBSE 10", value: "CBSE 10" },
    { label: "CBSE 11", value: "CBSE 11" },
    { label: "CBSE 12", value: "CBSE 12" },
  ];

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  const handleGradeChange = (value: string) => {
    setSelectedGrade(value);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navigation */}
        <div className="flex justify-between items-center p-4 bg-white border-b">
          <Navigation />
        </div>

        {/* Filters and Add Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 gap-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 ml-64 w-full lg:w-auto">
            {/* Academic Year Dropdown */}
            <div className="relative inline-block w-full sm:w-auto">
              <select
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="appearance-none px-4 py-2 pr-8 bg-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-900 w-full sm:w-auto"
              >
                {academicYears.map((year) => (
                  <option key={year.value} value={year.value}>
                    {year.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Grade Dropdown */}
            <div className="relative inline-block w-full sm:w-auto">
              <select
                value={selectedGrade}
                onChange={(e) => handleGradeChange(e.target.value)}
                className="appearance-none px-4 py-2 pr-8 bg-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-900 w-full sm:w-auto"
              >
                {grades.map((grade) => (
                  <option key={grade.value} value={grade.value}>
                    {grade.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Add Student Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-gray-300 border border-gray-200 rounded-lg flex items-center gap-2 transition-colors text-gray-700 w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add new Student</span>
          </button>
        </div>

        {/* Student Table */}
        <div className="p-6 overflow-x-auto">
          <StudentTable />
        </div>
      </div>

      {/* Add Student Modal */}
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
