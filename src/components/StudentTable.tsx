"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "@/redux/features/studentSlice";
import type { RootState, AppDispatch } from "@/redux/store";



export default function StudentTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { students, loading, error } = useSelector(
    (state: RootState) => state.students
  );
  const subjectIcons: { [key: string]: string } = {
    "CBSE 9 Science": "/images/subject-icons/math.jpg",
    "CBSE 9 Math": "/images/subject-icons/science.webp",
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Cohort
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Courses
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Date joined
            </th>

            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Last Login
            </th>
            <th className="px-6 py-3 text-left text-xs text-gray-950 font-bold uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.cohort}</td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-wrap gap-4">
                  {student.courses.map((course) => (
                    <div key={course} className="flex items-center bg-slate-200 rounded-md gap-2">
                      <img
                        src={ 
                          subjectIcons[course] ||
                          "/images/subject-icons/default.png"
                        }
                        alt={`${course} icon`}
                        className="w-6 h-6 rounded-md bg-slate-500"
                      />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(student.joined_date).toLocaleDateString()}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(student.last_login).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {student.status ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
