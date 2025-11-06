import React from 'react'
import ArrowUp from '../../assets/arrow-up.png'
import ArrowDown from '../../assets/arrow-bottom.png'




const crypto = [
     {
    id: "Ethereum",
    image: ArrowUp,
    crypto: "Ethereum",
    action: "Received",
    amount: "$24,102",
    time: "Today, 19:30"
  },

  {
    id: "Bitcoin",
    image: ArrowDown,
    crypto: "Bitcoin",
    action: "Buy",
    amount: "$4,157",
    time: "Today, 14:32"
  },

  {
    id: "Bitcoin2",
    image: ArrowDown,
    crypto: "Bitcoin",
    action: "Buy",
    amount: "$64,784",
    time: "Today, 13:50"
  },

  {
    id: "Litecoin",
    image: ArrowDown,
    crypto: "Litecoin",
    action: "Buy",
    amount: "$14,265",
    time: "Today, 09:38"
  },
]

function Transactions() {
  return (
    <div className='bg-white rounded-xl shadow-md p-6'>
        <h2 className='text-2xl font-semibold text-black mb-6'>Transactions</h2>
      <div className="space-y-4">
        {crypto.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex border border-slate-600 dark:border-slate-300/50 items-center justify-center`}>
                  <img src={item.image} alt="" className="w-5 h-5" />
                </div>

                {/* The currency title and the bought or recieved feature */}
                <div>
                  <p className="font-semibold text-black">{item.crypto}</p>
                  <p className="text-sm text-gray-400">{item.action}</p>
                </div>

                {/* The day and time as well as amount */}
              </div>
              <div className="text-right">
                <p className="font-semibold text-black">{item.amount}</p>
                <p className="text-sm text-gray-400">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Transactions