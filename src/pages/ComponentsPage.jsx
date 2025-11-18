import React, { useState } from "react";
import { Search } from "lucide-react";

import MyCard from "../components/MyCard";
import TransactionCards from "../components/TransactionCards";
import TransactionsSection from "../components/TransactionsSection";
import CashflowChart from "../components/charts/CashflowChart";
import MoneySpentSection from "../components/MoneySpentSection";
import AccountsSection from "../components/AccountsSection";
import Navbar from "../components/Navbar";

export default function ComponentsPage() {
  const [selected, setSelected] = useState("Cards");

  const componentsList = [
    { name: "Cards", description: "UI card components used for account and stats display." },
    { name: "Transactions", description: "Transaction list layout for incomes and expenses." },
    { name: "Charts", description: "Analytics charts using ApexCharts and custom UI." },
    { name: "Money Spent", description: "Category-based expense distribution UI." },
    { name: "Accounts", description: "Displays user's multiple accounts and balances." },
    { name: "Navbar", description: "Top navigation bar with actions, search & notifications." },
  ];

  // -------------------------------
  // COMPONENT RENDER SWITCH
  // -------------------------------
  const renderSelectedComponent = () => {
    switch (selected) {
      // -------------------------------
      // CARDS — stacked vertically
      // -------------------------------
      case "Cards":
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* MyCard */}
            <div className="w-full max-w-full sm:max-w-xl mx-auto">
              <MyCard />
            </div>

            {/* Transaction small cards */}
            <div className="w-full max-w-full sm:max-w-3xl mx-auto">
              <TransactionCards />
            </div>

            {/* Accounts list */}
            <div className="w-full max-w-full sm:max-w-lg mx-auto">
              <AccountsSection />
            </div>

          </div>
        );

      // -------------------------------
      // TRANSACTIONS
      // -------------------------------
      case "Transactions":
        return (
          <div className="w-full max-w-full sm:max-w-2xl mx-auto">
            <TransactionsSection />
          </div>
        );

      // -------------------------------
      // CHARTS
      // -------------------------------
      case "Charts":
        return (
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="w-full min-h-[280px] sm:min-h-[320px] overflow-hidden">
                <CashflowChart />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="w-full max-w-full sm:max-w-2xl mx-auto">
                <TransactionCards />
              </div>
            </div>
          </div>
        );

      // -------------------------------
      // MONEY SPENT
      // -------------------------------
      case "Money Spent":
        return (
          <div className="w-full min-h-[280px] sm:min-h-[320px] overflow-hidden">
            <MoneySpentSection />
          </div>
        );

      // -------------------------------
      // ACCOUNTS
      // -------------------------------
      case "Accounts":
        return (
          <div className="w-full max-w-full sm:max-w-lg mx-auto min-h-[280px] sm:min-h-[320px]">
            <AccountsSection />
          </div>
        );

      // -------------------------------
      // NAVBAR
      // -------------------------------
      case "Navbar":
        return (
          <div className="border rounded-xl shadow-sm overflow-hidden w-full max-w-full overflow-x-auto">
            <div className="min-w-[320px]">
              <Navbar isSidebarOpen={false} toggleSidebar={() => {}} />
              <div className="p-3 sm:p-4 text-gray-600 text-xs sm:text-sm bg-gray-50">
                *Navbar preview shown without sidebar logic.
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // -------------------------------
  // MAIN PAGE RETURN
  // -------------------------------
  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-4 sm:gap-6">

      {/* LEFT SIDEBAR LIST - Sticky on desktop, scrollable on mobile */}
      <div className="w-full lg:w-64 bg-white p-3 sm:p-4 border border-gray-200 rounded-xl shadow-sm lg:h-fit lg:sticky lg:top-20">

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <h2 className="text-[10px] xs:text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
          Components
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1 sm:gap-2">
          {componentsList.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelected(item.name)}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg cursor-pointer transition 
                ${selected === item.name
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 hover:text-blue-600"}
                truncate
              `}
              title={item.name}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0">

        {/* Page Title */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Components Overview</h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            A documentation-style overview of all UI components used in your Finance Dashboard project.
          </p>
        </div>

        {/* Selected Component Description */}
        {componentsList
          .filter((c) => c.name === selected)
          .map((c, i) => (
            <div key={i} className="mb-4 sm:mb-6 bg-white border rounded-xl p-4 sm:p-5 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {c.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{c.description}</p>
            </div>
        ))}

        {/* Component Preview */}
        <div>{renderSelectedComponent()}</div>

      </div>
    </div>
  );
}
