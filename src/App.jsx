import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import ComponentsPage from "./pages/ComponentsPage";
import Statistics from "./pages/Statistics";
import Data from "./pages/Data";
import ChartPage from "./pages/Chart";     // ⭐ ADDED

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-[#f8f9fa] text-gray-800 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* MAIN CONTENT */}
      <div
        className={`
          flex-1 min-h-screen relative
          transition-all duration-300
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}
        `}
      >
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          isSidebarOpen={sidebarOpen}
        />

        {/* ROUTES */}
        <main className="pt-20 px-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/finance" element={<Finance />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/data" element={<Data />} />
            <Route path="/charts" element={<ChartPage />} />   {/* ⭐ NEW ROUTE */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
