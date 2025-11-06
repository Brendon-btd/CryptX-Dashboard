import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";
import Bitcoin from "../../assets/Bitcoin.png";
import Ethereum from "../../assets/Ethereum.png";
import Litecoin from "../../assets/Litecoin.png";
import Cardano from "../../assets/Cordano.png";

const stats = [
    {
    title:"Bitcoin (BTC)",
    value:"$40,291",
    change:"+0.25%",
    trend:"up",
    image: Bitcoin,
    
    
},
{
    title:"Ethereum (ETH)",
    value:"$18,291",
    change:"+0.25%",
    trend:"up",
    image: Ethereum,
    
    
},
{
    title:"Litecoin (LTC)",
    value:"$8,291",
    change:"+0.25%",
    trend:"up",
    image: Litecoin,
   
    
},
{
    title:"Cardano (ADA)",
    value:"$3,291",
    change:"-2.05%",
    trend:"down",
    image: Cardano,
    
},
]

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-xl">
      {stats.map((stat, index)=>{
        {/* The Crypto Stats */}
      return (<div
        className="bg-white dark:bg-slate-50 backdrop-blur-xl rounded-2xl p-6 shadow-md shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/40
        dark:shadow-slate-900/10 dark:hover:shadow-slate-900/20 transition-all duration-300 group" key={index}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* The Crypto Logo */}
            <div className="mb-3">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2`}>
                 <img src={stat.image} alt={`${stat.title} logo`} className='w-12 h-12 object-contain group-hover:scale-110 transition-all duration-300'/>
               </div>
            </div>
            
            {/* The Crypto Value */}
            <p className="text-3xl font-bold text-black dark-white mb-3">
              {stat.value}
            </p>
            
            {/* The trend line and name of currency */}
            <div className="flex items-center space-x-2">
                {stat.trend === "up" ? 
                  <ArrowUpRight className="w-4 h-4 text-emerald-500"/> : 
                  <ArrowDownRight className="w-4 h-4 text-red-500"/>
                }

                {/* if the arrow is up it turns green and if the arrow is down it turns red */}
                <span className={`text-sm font-semibold ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {stat.title}
              </span>
            </div>
          </div>
        </div>
      </div> );
      })}
    </div>
  );
}

export default StatsGrid;