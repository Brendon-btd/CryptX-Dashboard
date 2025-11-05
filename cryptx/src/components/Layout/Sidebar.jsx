import React from "react";
import { InfinityIcon, LayoutDashboard } from "lucide-react";
import Logo from "../../assets/Logo.png"

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },

  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
];

function Sidebar() {
  return (
    <div
      className="w-72 transition duration-300 ease-in-out bg-gray-500 dark:bg-slate-50 backdrop-blur-xl  border-slate-200/50
     flex flex-col relative z-10"
    >
      {/* CryptX Logo part */}
      <div className="p-6 ">
        <div className="flex items-center space-x-0.1">
          <div className="w-18 h-10  rounded-xl flex items-center justify-center">
            <img src={Logo} alt="CryptX logo" className="h-14 w-14 md:h-20 md:w-20 object-contain" />
          </div>


          
        </div>
      </div>

      {/* The Navigation Bar Menus */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id} className="relative">
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-700 cursor-pointer ${
                  item.active
                    ? "text-[#6154F0] font-semibold"
                    : "text-gray-400 hover:text-[#6154F0]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon
                    className={`w-5 h-5 ${item.active ? "stroke-[2.5]" : ""}`}
                  />
                  {/* Titles */}

                  <span className="ml-2">{item.label}</span>
                </div>

                {item.active && (
                  <div className="w-2 h-2 bg-[#6154F0] rounded-full"></div>
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
