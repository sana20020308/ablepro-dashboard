import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import ComponentsPage from "./pages/ComponentsPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">

      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />

      <div className={`flex-1 flex flex-col transition-all duration-300
        ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"} ml-0
      `}>
        <Navbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />

        <main className="p-6 overflow-y-auto flex-1">

          <Routes>

            {/* DEFAULT */}
            <Route path="/" element={<Dashboard />} />

            {/* DASHBOARD */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/finance" element={<Finance />} />

            {/* COMPONENTS PAGE */}
            <Route path="components" element={<ComponentsPage />} />

          </Routes>

        </main>
      </div>
    </div>
  );
}

export default App;
