"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/features/studentSlice";
import type { AppDispatch } from "../redux/store";

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddStudentModal({
  isOpen,
  onClose,
}: AddStudentModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    courses: [] as string[],
    joined_date: new Date().toISOString(),
    status: true,
    last_login: new Date().toISOString(),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        courses: formData.courses.length ? formData.courses : [],
        joined_date: formData.joined_date, 
      };

      await dispatch(addStudent(payload)).unwrap();
      onClose();
      setFormData({
        name: "",
        cohort: "",
        courses: [],
        joined_date: new Date().toISOString(),
        status: true,
        last_login: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cohort
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.cohort}
              onChange={(e) =>
                setFormData({ ...formData, cohort: e.target.value })
              }
              required
            />
          </div>
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Courses
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.courses.join(", ")}
                onChange={(e) => {
                  const courses = e.target.value
                    .split(",")
                    .map((course) => course.trim()); // Split string into an array
                  setFormData({ ...formData, courses });
                }}
                placeholder="Enter courses separated by commas (e.g., Math, Science)"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Joined date
            </label>
            <input
              type="datetime-local"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={new Date(formData.joined_date).toISOString().slice(0, 16)}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  joined_date: new Date(e.target.value).toISOString(),
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              type="checkbox"
              checked={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.checked })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Login
            </label>
            <input
              type="datetime-local"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={new Date(formData.last_login).toISOString().slice(0, 16)}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  last_login: new Date(e.target.value).toISOString(),
                })
              }
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
