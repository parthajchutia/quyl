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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed h-full bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="">
          <Navigation />
        </div>

        {/* Main Content Area */}
        <div className="p-6 ml-6 mt-4 mr-2 rounded-lg bg-white">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <div className="relative font-bold">
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 font-bold bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-700 min-w-[140px]"
                >
                  {academicYears.map((year) => (
                    <option key={year.value} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 font-bold text-gray-500" />
              </div>

              
              <div className="relative">
                <select
                  value={selectedGrade}
                  onChange={(e) => handleGradeChange(e.target.value)}
                  className="appearance-none px-4 py-2 font-bold pr-8 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-700 min-w-[120px]"
                >
                  {grades.map((grade) => (
                    <option key={grade.value} value={grade.value}>
                      {grade.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Add Student Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 font-bold bg-gray-100 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors text-gray-700"
            >
              <Plus className="w-4 h-5" />
              <span>Add new Student</span>
            </button>
          </div>

          {/* Student Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="w-full overflow-x-auto">
              <StudentTable />
            </div>
          </div>
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
