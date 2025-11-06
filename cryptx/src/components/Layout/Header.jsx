import { CircleQuestionMark, Bell, ChevronDown, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="bg-white dark:bg-white backdrop-blur-xl px-6 py-4 relative after:absolute after:bottom-0 after:left-15 after:right-15 after:h-0.5 after:bg-slate-300/50">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <div className="flex-1 max-w-4xl mx-8">
            <div className="relative">
              <Search className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 " />
              <input
                type="text"
                placeholder="Search type of key words"
                className="w-full pl-4 pr-40 py-2.5 bg-slate-100 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl text-slate-800
               dark:text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* The icons and profile section on the right */}
        <div className="flex items-center space-x-0.5">
          {/* Bell Icon */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-liner-to-r text-slate-500">
            <Bell className="w-6 h-6" />
          </button>

          {/* Question Mark Icon */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-liner-to-r  text-slate-500">
            <CircleQuestionMark className="w-6 h-6" />
          </button>

          {/* Profile */}
          <div className="p-2 border-slate-500 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-white">
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>

              <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-black truncate">
                    Laurice
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    @laurice22
                  </p>
                </div>
              </div>

              <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;