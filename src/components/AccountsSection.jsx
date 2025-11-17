import React from "react";
import { Plus } from "lucide-react";

const card1 = "/Images/Widgets/img-card-1.png";
const card2 = "/Images/Widgets/img-card-2.png";

const accounts = [
  { img: card1, status: "Active", amount: "12,920.000", currency: "US Dollar" },
  { img: card2, status: "Active", amount: "12,920.000", currency: "US Dollar" },
];

export default function AccountsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 w-full">
      {/* Header */}
      <h5 className="text-lg font-semibold text-gray-900 mb-4">Accounts</h5>

      {/* Accounts List */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5">
        {accounts.map((acc, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-3 flex items-center justify-between h-auto sm:h-20 gap-3"
          >
            {/* Card Image and Status */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 sm:w-16 sm:h-10 flex-shrink-0">
                <img
                  src={acc.img}
                  alt="card"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-1.5 text-green-500 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{acc.status}</span>
              </div>
            </div>

            {/* Amount Section */}
            <div className="text-right">
              <h6 className="text-gray-900 font-semibold text-sm sm:text-base">
                {acc.amount}
              </h6>
              <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                {acc.currency}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Account */}
      <div className="border border-dashed border-gray-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <label htmlFor="formFile" className="block w-full">
          <input type="file" id="formFile" className="hidden" />
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-900 text-white rounded-full mb-1">
              <Plus className="w-4 h-4" />
            </div>
            <p className="text-gray-500 text-sm">Add to Account</p>
          </div>
        </label>
      </div>
    </div>
  );
}
