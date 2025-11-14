import React from "react";
import AccountsSection from "../components/AccountsSection";
import MyCard from "../components/MyCard";
import TransactionCards from "../components/TransactionCards";
import TransactionsSection from "../components/TransactionsSection";
import MoneySpentSection from "../components/MoneySpentSection";
import CashflowChart from "../components/CashflowChart";

export default function ComponentsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Components</h1>
        <p className="text-gray-500 mt-1">
          These are the UI components used in your Finance Dashboard.
        </p>
      </div>

      {/* ⭐ SECTION 1 — Card Components */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cards</h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <MyCard />
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <TransactionsSection />
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <AccountsSection />
          </div>
        </div>
      </div>

      {/* ⭐ SECTION 2 — Charts */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Charts</h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <CashflowChart />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <TransactionCards />
          </div>
        </div>
      </div>

      {/* ⭐ SECTION 3 — Category Cards */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Spending Categories</h2>

        <MoneySpentSection />
      </div>
    </div>
  );
}
