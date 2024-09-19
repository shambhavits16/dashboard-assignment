/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default App;
