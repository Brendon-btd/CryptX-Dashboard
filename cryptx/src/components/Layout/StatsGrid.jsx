import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";


const stats = [
    {
    title:"Bitcoin (BTC)",
    value:"$40,291",
    change:"-5.8%",
    trend:"up",
    image:"../../assets/Bitcoin.png",
    
},
{
    title:"Ethereum (ETH)",
    value:"$18,291",
    change:"-5.8%",
    trend:"up",
    image:"../../assets/Ethereum.png",
    
},
{
    title:"Litecoin (LTC)",
    value:" $8,291",
    change:"-5.8%",
    trend:"up",
    image:"../../assets/Litecoin.png",
    
},
{
    title:"Cardano (ADA) ",
    value:"$3,291",
    change:"-5.8%",
    trend:"down",
    image:"../../assets/Cordano.png",
    
},
]

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-6 gap-4">
      {stats.map((stats, index)=>{
        {/* The Crypto Stats */}
      return (<div
        className="bg-white dark:bg-slate-50 backdrop-blur-xl rounded-2xl p-6  
  shadow-md shadow-slate-200/30 
  hover:shadow-xl hover:shadow-slate-200/40
  dark:shadow-slate-900/10 dark:hover:shadow-slate-900/20
  transition-all duration-300 group" key={index}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
               <img src={stats.image} alt='CRYPTO LOGO' className='w-10 h-10 object-cover group-hover:scale-105 transition-all duration-300'/>
            </p>
            <p className="text-3xl font-bold text-black dark-white mb-4">
              {stats.value}
            </p>
            <div className="flex items-center space-x-2">
                {stats.trend === "up" ? <ArrowUpRight className="w-4 h-4 text-emerald-500"/> :  <ArrowDownRight className="w-4 h-4 text-red-500"/>}
                <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {stats.title}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-200`}
        ></div>
      </div> );
      })}
    </div>
  );
}

export default StatsGrid;








