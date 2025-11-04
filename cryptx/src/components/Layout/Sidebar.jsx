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

     
    </div>
  );
}

export default Sidebar;
