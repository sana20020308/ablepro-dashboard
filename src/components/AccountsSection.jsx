import React from "react";
import { Plus } from "lucide-react";

// Images from your public folder
const card1 = "/Images/Widgets/img-card-1.png";
const card2 = "/Images/Widgets/img-card-2.png";

const accounts = [
  { img: card1, status: "Active", amount: "12,920.000", currency: "US Dollar" },
  { img: card2, status: "Active", amount: "12,920.000", currency: "US Dollar" },
];

export default function AccountsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <h5 className="text-lg font-semibold text-gray-900 mb-4">Accounts</h5>

      {/* Accounts */}
      <div className="space-y-3 mb-5">
        {accounts.map((acc, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-3 flex items-center justify-between hover:shadow-sm transition-all duration-200"
          >
            {/* Card image and status */}
            <div className="flex items-center">
              <div className="w-16 h-10 flex-shrink-0">
                <img
                  src={acc.img}
                  alt="card"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5 text-green-500 text-xs font-medium ml-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{acc.status}</span>
              </div>
            </div>

            {/* Amount */}
            <div className="text-right">
              <h6 className="text-gray-900 font-semibold text-sm">
                {acc.amount}
              </h6>
              <p className="text-gray-500 text-xs">{acc.currency}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add account */}
      <div className="border border-dashed border-gray-300 rounded-2xl p-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <label htmlFor="formFile" className="block w-full">
          <input type="file" id="formFile" className="hidden" />
          <div className="flex flex-col items-center justify-center py-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full mb-1">
              <Plus className="w-4 h-4" />
            </div>
            <p className="text-gray-500 text-sm">Add to Account</p>
          </div>
        </label>
      </div>
    </div>
  );
}
