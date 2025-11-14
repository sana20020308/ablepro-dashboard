import React, { useState } from "react";
import { Search } from "lucide-react";

import MyCard from "../components/MyCard";
import TransactionCards from "../components/TransactionCards";
import TransactionsSection from "../components/TransactionsSection";
import CashflowChart from "../components/CashflowChart";
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
          <div className="space-y-6">

            {/* MyCard */}
            <div className="w-full max-w-xl">
              <MyCard />
            </div>

            {/* Transaction small cards */}
            <div className="w-full max-w-3xl">
              <TransactionCards />
            </div>

            {/* Accounts list */}
            <div className="w-full max-w-lg">
              <AccountsSection />
            </div>

          </div>
        );

      // -------------------------------
      // TRANSACTIONS
      // -------------------------------
      case "Transactions":
        return (
          <div className="max-w-2xl">
            <TransactionsSection />
          </div>
        );

      // -------------------------------
      // CHARTS
      // -------------------------------
      case "Charts":
        return (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="w-full min-h-[320px]">
                <CashflowChart />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <TransactionCards />
            </div>
          </div>
        );

      // -------------------------------
      // MONEY SPENT
      // -------------------------------
      case "Money Spent":
        return (
          <div className="w-full min-h-[320px]">
            <MoneySpentSection />
          </div>
        );

      // -------------------------------
      // ACCOUNTS
      // -------------------------------
      case "Accounts":
        return (
          <div className="max-w-lg min-h-[320px]">
            <AccountsSection />
          </div>
        );

      // -------------------------------
      // NAVBAR
      // -------------------------------
      case "Navbar":
        return (
          <div className="border rounded-xl shadow-sm overflow-hidden">
            <Navbar isSidebarOpen={false} toggleSidebar={() => {}} />
            <div className="p-4 text-gray-600 text-sm">
              *Navbar preview shown without sidebar logic.
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
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-6">

      {/* LEFT SIDEBAR LIST */}
      <div className="w-full lg:w-64 bg-white p-4 border border-gray-200 rounded-xl shadow-sm h-fit sticky top-20">

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
          Components
        </h2>

        <ul className="space-y-1">
          {componentsList.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelected(item.name)}
              className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition 
                ${selected === item.name
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 hover:text-blue-600"}
              `}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Components Overview</h1>
          <p className="text-gray-500 mt-1">
            A documentation-style overview of all UI components used in your Finance Dashboard project.
          </p>
        </div>

        {/* Selected Component Description */}
        {componentsList
          .filter((c) => c.name === selected)
          .map((c, i) => (
            <div key={i} className="mb-6 bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {c.name}
              </h3>
              <p className="text-gray-600 text-sm">{c.description}</p>
            </div>
        ))}

        {/* Component Preview */}
        <div>{renderSelectedComponent()}</div>

      </div>
    </div>
  );
}
