import React from "react";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Layout/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className='flex-1 overflow-y-auto bg-white'>
          <div className='p-6 space-y-6'>
            <Dashboard/>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}

export default App;
