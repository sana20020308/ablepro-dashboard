import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-[#f8f9fa] text-gray-800 min-h-screen overflow-hidden flex">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Navbar */}
        <Navbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-[#f8f9fa]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/finance" element={<Finance />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
