import React from 'react'

import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div className=' w-full flex-row'>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default App