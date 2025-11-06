import React from "react";
import StatsGrid from "./StatsGrid";
import Chart from "./Charts";
import LiveMarket from "./LiveMarket"
import Transactions from "./Transactions"

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top section: Stats Grid and Charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* The Stats crypto currency grid on Left side */}
        <StatsGrid />

        {/* The Charts on Right side */}
        <Chart />
      </div>

       {/* the bottom section side by side */}
     <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
  {/* The Live market on Left side*/}
  <div className="lg:col-span-3">
    <LiveMarket />
  </div>

  {/* The transaction on Right side*/}
  <div className="lg:col-span-2">
    <Transactions />
  </div>
</div>
      
    </div>
    
    
  );
}

export default Dashboard;
