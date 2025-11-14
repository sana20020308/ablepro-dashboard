import React from "react";
import { MoreVertical } from "lucide-react";
import cardChip from "/Images/Widgets/img-card-master.svg";
import cardBg from "/Images/Widgets/img-card-bg.svg";

export default function MyCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-base font-semibold text-gray-800">My Card</h5>
        <button className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Card Body */}
      <div
        className="rounded-2xl overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundColor: "#111827",
        }}
      >
        <div className="p-4 sm:p-5">
          {/* Top row */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white text-xs sm:text-sm opacity-50 mb-1 tracking-wide">
                CARD NAME
              </p>
              <h5 className="text-white font-semibold text-sm sm:text-base">
                John Smith
              </h5>
            </div>
            <img
              src={cardChip}
              alt="Card Chip"
              className="w-8 sm:w-10 h-auto object-contain"
            />
          </div>

          {/* Card Number */}
          <h4 className="text-white my-5 sm:my-6 tracking-widest text-base sm:text-lg font-medium">
            **** **** **** <span className="font-bold">8361</span>
          </h4>

          {/* EXP + CVV */}
          <div className="flex items-center gap-10">
            <div>
              <p className="text-white text-xs sm:text-sm opacity-50">EXP</p>
              <h6 className="text-white font-semibold text-sm sm:text-base">
                7/30
              </h6>
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm opacity-50">CVV</p>
              <h6 className="text-white font-semibold text-sm sm:text-base">
                455
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Total Balance */}
      <div className="text-center mt-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          $1.480.000
        </h3>
        <p className="text-sm text-gray-500">Total Balance</p>
      </div>
    </div>
  );
}
