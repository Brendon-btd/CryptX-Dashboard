import React from 'react'
import Sidebar  from './components/Layout/Sidebar'
import Header from './components/Layout/Header'

function App() {
  return (
    <div className='min-h-screen bg-white transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App 