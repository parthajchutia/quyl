'use client';

import { useState } from 'react';
import AddStudentModal from '../components/AddStudentModel';
import StudentTable from '../components/StudentTable';
import Sidebar from '../components/Sidebar';
import './globals.css';

export default function StudentManagementPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 bg-white border-b">
          <h1 className="text-2xl font-semibold">Students</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Add Student
          </button>
        </div>
        <div className="p-6">
          <StudentTable />
        </div>
      </div>
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}