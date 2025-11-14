import React from "react";
import { MoreVertical } from "lucide-react";

// Images from public directory
const foodImg = "/Images/Widgets/img-food.png";
const travelImg = "/Images/Widgets/img-travel.png";
const shoppingImg = "/Images/Widgets/img-shoping.png";
const healthImg = "/Images/Widgets/img-helth.png";

const categories = [
  { title: "Food & Drink", img: foodImg, percent: 65, value: "$1000" },
  { title: "Travel", img: travelImg, percent: 30, value: "$400" },
  { title: "Shopping", img: shoppingImg, percent: 52, value: "$900" },
  { title: "Healthcare", img: healthImg, percent: 26, value: "$250" },
];

export default function MoneySpentSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 w-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h5 className="text-[17px] font-semibold text-gray-800">
          Where your money go ?
        </h5>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm w-full sm:w-auto text-center">
          + Add New
        </button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="col-span-12 sm:col-span-6 xl:col-span-3"
          >
            <div className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-200 h-full">
              <div className="p-4 sm:p-5 flex flex-col h-full">

                {/* Image + Menu */}
                <div className="flex items-center justify-between mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                  <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Title */}
                <h6 className="text-[15px] font-medium text-gray-800 mb-3 truncate">
                  {item.title}
                </h6>

                {/* Progress Container */}
                <div className="bg-[#0f172a] text-white rounded-2xl px-3 py-3 mt-auto">
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-lg h-1.5 mb-2">
                    <div
                      className="bg-white h-full rounded-lg transition-all duration-700"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between text-sm text-white opacity-80">
                    <p>{item.percent}%</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
