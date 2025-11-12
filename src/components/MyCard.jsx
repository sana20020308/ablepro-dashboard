import React from "react";
import { MoreVertical } from "lucide-react";
import cardChip from "/Images/Widgets/img-card-master.svg";
import cardBg from "/Images/Widgets/img-card-bg.svg"; // background image

export default function MyCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm w-96">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-base font-semibold text-gray-800 mb-0">My Card</h5>
        <div className="relative">
          <button className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
            <MoreVertical className="w-5 h-5" />
          </button>
          {/* Example dropdown (optional) */}
          {/* 
          <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg border border-gray-100">
            <a href="#" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Today</a>
            <a href="#" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Weekly</a>
            <a href="#" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Monthly</a>
          </div>
          */}
        </div>
      </div>

      {/* Card body */}
      <div
        className="rounded-2xl overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundColor: "#111827",
        }}
      >
        <div className="p-5">
          {/* Top: Name + Logo */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white text-sm opacity-50 mb-1 tracking-wide">
                CARD NAME
              </p>
              <h5 className="text-white font-semibold">John Smith</h5>
            </div>
            <img
              src={cardChip}
              alt="Card Chip"
              className="w-10 h-auto object-contain"
            />
          </div>

          {/* Card Number */}
          <h4 className="text-white my-6 tracking-widest text-lg font-medium">
            **** **** **** <span className="font-bold">8361</span>
          </h4>

          {/* EXP + CVV */}
          <div className="flex items-center gap-10">
            <div>
              <p className="text-white text-sm opacity-50 mb-0">EXP</p>
              <h6 className="text-white font-semibold mb-0">7/30</h6>
            </div>
            <div>
              <p className="text-white text-sm opacity-50 mb-0">CVV</p>
              <h6 className="text-white font-semibold mb-0">455</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Total Balance */}
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">$1.480.000</h3>
        <p className="text-sm text-gray-500 mb-0">Total Balance</p>
      </div>
    </div>
  );
}
