import React from "react";
import { InfinityIcon } from "lucide-react";

function Sidebar() {
  return (
    <div
      className="transition duration-300 ease-in-out bg-gray-400 dark:bg-slate-50 backdrop-blur-xl border-r border-slate-200/50
     flex flex-col relative z-10"
    >
      {/* CryptX Logo part */}
      <div className="p-6 ">
        <div className="flex items-center space-x-0.1">
          <div className="w-18 h-10  rounded-xl flex items-center justify-center">
            <InfinityIcon className="w-11 h-11 text-indigo-600" />
          </div>

          {/* The Name CryptX */}
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-black">
              CryptX
            </h1>
            <p>Admin</p>
          </div>
        </div>
      </div>

      {/* The Navigation Bar Menus */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

      {/* User Profile */}
      <div className="p-4 border-slate-50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-500 dark:bg-slate-50">
          <img src="" alt="" className="w-10 h-10 rounded-full ring-2 ring-slate-800" />

          <div className="flex-1 min-w-0">
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-black truncate">
                  Laurice 
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">@laurice22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
