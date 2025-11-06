import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: "Jan", 
    price: 580 
},



  { month: "Mar", 
    price: 650 
},



  { month: "May", 
    price: 480 
},



  { month: "Jul", 
    price: 600 
},


  { month: "Sep", 
    price: 400 
},


  { month: "Nov", 
    price: 700 
},
];

// The purple line for the chart, youtube video used to help direct me and add fature
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
        <p className="font-semibold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
};

function Charts() {
  return (
    <div className='bg-white rounded-xl shadow-md p-6'>
      {/* The name of the chart */}
      <h2 className='text-xl font-semibold text-black mb-6'>BTC Prices</h2>
      
      {/* The Chart used from Recharts */}
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            {/* Gradient for the area fill */}
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6154F0" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6154F0" stopOpacity={0}/>
            </linearGradient>
          </defs>


          {/* The side with the months */}
          <XAxis 
            dataKey="month" 
            axisLine={{ stroke: '#E5E7EB', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            dy={10}
          />

          {/* This is the side with the money value */}
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          
          {/* Area with gradient */}
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#6C5DD3" 
            strokeWidth={2}
            fill="url(#colorPrice)" 
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts