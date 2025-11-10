import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-[#f8f9fa] text-gray-800 overflow-hidden min-h-screen">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />

        {/* Page Content */}
        <main 
          className="flex-1 overflow-y-auto px-6 pt-20 transition-all duration-300"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
