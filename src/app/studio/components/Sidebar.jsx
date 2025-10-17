'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('convert');

  const handleItemClick = itemId => {
    setActiveItem(itemId);
  };

  return (
    <aside className="relative w-[202px] h-[calc(100vh-68px)] -ml-3 pt-4.5 pl-1.5 studio-sidebar rounded-xl overflow-y-auto border-none">
      <nav className="mb-5">
        <div
          className={`flex items-center px-5 py-3 text-white cursor-pointer transition-colors duration-200 ${
            activeItem === 'home' ? 'studio-nav-active' : 'hover:bg-white/30'
          }`}
          onClick={() => handleItemClick('home')}
        >
          <svg
            className="mr-3 text-base flex items-center justify-center text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span className="text-base">Home</span>
        </div>

        <div
          className={`flex items-center px-5 py-3 text-white cursor-pointer transition-colors duration-200 ${
            activeItem === 'library' ? 'studio-nav-active' : 'hover:bg-white/30'
          }`}
          onClick={() => handleItemClick('library')}
        >
          <svg
            className="mr-3 text-base flex items-center justify-center text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span className="text-base">Library</span>
        </div>
      </nav>

      <div className="border-t-2 border-white mb-5">
        <div className="px-5 py-2 text-base text-white font-medium">
          Content
        </div>
        <div
          className={`flex items-center px-5 py-3 text-white cursor-pointer transition-colors duration-200 ${
            activeItem === 'convert' ? 'studio-nav-active' : 'hover:bg-white/30'
          }`}
          onClick={() => handleItemClick('convert')}
        >
          <svg
            className="mr-3 text-base flex items-center justify-center text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
          <span className="text-base">Convert</span>
        </div>
      </div>

      <div className="border-t-2 border-white mb-5">
        <div className="px-5 py-2 text-base text-white font-medium">
          Personal
        </div>
        <div
          className={`flex items-center px-5 py-3 text-white cursor-pointer transition-colors duration-200 ${
            activeItem === 'account' ? 'studio-nav-active' : 'hover:bg-white/30'
          }`}
          onClick={() => handleItemClick('account')}
        >
          <svg
            className="mr-3 text-base flex items-center justify-center text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="text-base">My Account</span>
        </div>
      </div>
    </aside>
  );
}
