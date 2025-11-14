import React from "react";
import { MoreVertical, ArrowUpRight, ArrowDownRight, RefreshCcw } from "lucide-react";

export default function TransactionsSection() {
  const transactions = [
    {
      name: "Apple Inc.",
      id: "#ABLE-PRO-T00232",
      amount: "$210,000",
      change: "-10.6%",
      changeColor: "text-red-500",
      changeIcon: <ArrowDownRight className="w-3.5 h-3.5 text-red-500" />,
      initials: "AI",
      initialsBg: "bg-gray-100 text-gray-700",
    },
    {
      name: "Spotify Music",
      id: "#ABLE-PRO-T10232",
      amount: "-10,000",
      change: "+30.6%",
      changeColor: "text-green-500",
      changeIcon: <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />,
      initials: "SM",
      initialsBg: "bg-gray-100 text-gray-700",
    },
    {
      name: "Medium",
      time: "06:30 pm",
      amount: "-26",
      change: "+5%",
      changeColor: "text-yellow-500",
      changeIcon: <RefreshCcw className="w-3.5 h-3.5 text-yellow-500" />,
      initials: "MD",
      initialsBg: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Uber",
      time: "08:40 pm",
      amount: "+210,000",
      change: "+10.6%",
      changeColor: "text-green-500",
      changeIcon: <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />,
      initials: "U",
      initialsBg: "bg-gray-100 text-gray-700",
    },
    {
      name: "Ola Cabs",
      time: "07:40 pm",
      amount: "+210,000",
      change: "+10.6%",
      changeColor: "text-green-500",
      changeIcon: <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />,
      initials: "OC",
      initialsBg: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 w-full max-w-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-[16px] font-semibold text-gray-800">Transactions</h5>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-4 sm:space-y-5">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 py-2.5 border-b last:border-b-0 border-gray-100"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${tx.initialsBg}`}
              >
                {tx.initials}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 leading-none truncate">
                  {tx.name}
                </p>
                <p className="text-xs text-gray-400 leading-none">
                  {tx.id ? tx.id : tx.time}
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 leading-none mb-1">
                {tx.amount}
              </p>

              <div className="flex items-center justify-end gap-1 text-xs">
                {tx.changeIcon}
                <span className={`${tx.changeColor} font-medium`}>
                  {tx.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
