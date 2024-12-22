'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Bell, 
  Calendar,
  LayoutGrid,
  HelpCircle
} from 'lucide-react';

interface NavProps {
  userImage?: string;
  userName?: string;
}

export default function Navigation({ 
  userImage = '/User.png',
  userName = 'Adeline H. Dancy'
}: NavProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="w-full px-4 sm:px-6 mt-4 bg-white border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {/* Search Section */}
        <div className="relative flex-1 ml-64 max-w-xl w-full sm:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search your course"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Icons and Profile Section */}
        <div className="flex items-center justify-between w-full sm:w-auto space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="w-6 h-6 text-gray-600" />
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Calendar className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-gray-600" />
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={userImage}
                alt={userName}
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden sm:inline font-medium text-gray-900">
              {userName}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}