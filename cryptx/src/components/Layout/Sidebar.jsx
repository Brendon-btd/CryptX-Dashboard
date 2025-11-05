import React from "react";
import { ChartPie, LayoutDashboard, LogOut, Mail, Settings, Wallet, WalletCards } from "lucide-react";
import Logo from "../../assets/Logo.png"

const menuItems = [
  {
    id: "overview",
    icon: LayoutDashboard,
    label: "Overview",
    active: true,
    badge: "New",
  },

  {
    id: "chart",
    icon: ChartPie,
    label: "Chart ",
  },

  {
    id: "transactions",
    icon: WalletCards,
    label: "Transactions",
  },

  {
    id: "wallet",
    icon: Wallet,
    label: "Wallet",
  },

  {
    id: "mail box",
    icon: Mail,
    label: "Mail Box",
  },

  {
    id: "setting",
    icon: Settings,
    label: "Setting",
  },

  {
    id: "logout",
    icon: LogOut,
    label: "Logout",
  },
];

function Sidebar() {
  return (
    <div
      className="w-62 transition duration-300 ease-in-out bg-gray-500 dark:bg-slate-50 backdrop-blur-xl  border-slate-200/50
     flex flex-col relative z-10"
    >
      {/* CryptX Logo part */}
      <div className="p-6 ">
        <div className="flex items-center space-x-0.1">
          <div className="w-18 h-10  rounded-xl flex items-center justify-center">
            <img src={Logo} alt="CryptX logo" className="h-20 w-20 object-contain" />
            
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
