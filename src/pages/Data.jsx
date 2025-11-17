// /src/pages/Data.jsx
import React from "react";
import {
  MoreVertical,
  CheckCircle,
  Clock,
  Star,
  Plus,
} from "lucide-react";

export default function Data() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Breadcrumb + Title */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">Home &gt; Widget &gt; Data</div>
        <h1 className="text-3xl font-semibold text-gray-800">Data</h1>
      </div>

      {/* ========== TOP GRID (3 Columns Desktop) ========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* My Task */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">My Task</h3>
            <MoreVertical className="text-gray-400" />
          </div>

          <ul className="space-y-3">
            <li className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Follow up client for feedback</div>
                <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                  <Clock className="w-3.5 h-3.5" /> Sending report
                </div>
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">00 : 15</span>
            </li>

            <li className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Add new pages</div>
                <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Received report
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">00 : 30</span>
            </li>

            <li className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Send time stamp report</div>
                <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                  <Clock className="w-3.5 h-3.5" /> Sending report
                </div>
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">00 : 15</span>
            </li>
          </ul>
        </div>

        {/* Job / Company Card */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded flex items-center justify-center font-semibold">G</div>
                <div>
                  <div className="font-semibold text-gray-800">Google LLC</div>
                  <div className="text-xs text-gray-500">Sr. UI designer</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">Description</p>
              <p className="text-xs text-gray-500 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">Fulltime</span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">Remote</span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">Hourly</span>
              </div>

              <div className="text-xs text-gray-400 mt-3">Pennsylvania, USA · 2 days ago</div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Apply</button>
              <MoreVertical className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Team members</h3>
            <MoreVertical className="text-gray-400" />
          </div>

          <ul className="space-y-3 text-sm">
            {[
              ["avatar-1.jpg", "David Jones", "Project Leader", "5 min ago"],
              ["avatar-2.jpg", "Robert Smith", "HR Manager", "Yesterday"],
              ["avatar-3.jpg", "John larry", "Developer", "1 hour ago"],
            ].map(([img, name, role, time]) => (
              <li key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`/Images/Avatar/${img}`} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-xs text-gray-400">{role}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{time}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Products</h3>
            <div className="flex items-center gap-2">
              <select className="text-sm border rounded px-2 py-1">
                <option>Monthly</option>
              </select>
              <MoreVertical className="text-gray-400" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-500">
                  <th className="py-2">PRODUCT</th>
                  <th className="py-2">STATUS</th>
                  <th className="py-2">PRICE</th>
                  <th className="py-2">SALES</th>
                  <th className="py-2">RATING</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["img-card-1.png", "Matte Flip Flop", "Leather panels. Laces.", "Active", "green", 98, 500, "+20.6", "4.5"],
                  ["img-card-2.png", "Foundations Matte", "Lorem ipsum is simply dummy", "Pending", "yellow", 98, 500, "-10.6", "2.5"],
                  ["img-card-3.png", "Logic Coma", "Leather panels", "Close", "red", 98, 500, "+20.6", "4.5"],
                ].map(([img, name, desc, status, color, price, sales, rate, rating]) => (
                  <tr key={name} className="border-t">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img src={`/Images/Widgets/${img}`} className="w-12 h-12 rounded" />
                        <div>
                          <div className="font-medium text-gray-800">{name}</div>
                          <div className="text-xs text-gray-400">{desc}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3">
                      <span className={`px-2 py-0.5 text-xs bg-${color}-100 text-${color}-600 rounded`}>
                        {status}
                      </span>
                    </td>

                    <td className="py-3">${price}</td>
                    <td className="py-3">${sales} <span className={`text-xs text-${rate.includes('-') ? "red" : "green"}-500`}>{rate}</span></td>
                    <td className="py-3 flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" />{rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-gray-500 mt-3">Showing 1 to 4 of 4 entries</div>
        </div>

        {/* New Customers */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold mb-4">New Customers</h3>
          <ul className="space-y-3">
            {[
              ["avatar-1.jpg", "Alex Thompson", "Cheers!", "online"],
              ["avatar-2.jpg", "John Doue", "stay hungry stay foolish!", "30 min ago"],
              ["avatar-3.jpg", "Shirley Hoe", "Cheers!", "online"],
            ].map(([img, name, msg, status]) => (
              <li key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`/Images/Avatar/${img}`} className="w-9 h-9 rounded-full" />
                  <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-xs text-gray-500">{msg}</div>
                  </div>
                </div>

                {status === "online" ? (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                ) : (
                  <span className="text-xs text-gray-400">{status}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Tickets */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Recent Tickets</h3>
            <a className="text-sm text-blue-600" href="#">View all</a>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              ["Website down for one week", "Today 2:00", "green", "open"],
              ["Loosing control on server", "Yesterday", "indigo", "progress"],
              ["Authorizations keys", "27 Aug", "red", "closed"],
            ].map(([title, time, color, label]) => (
              <div key={title}>
                <div className="py-2 border-b flex items-center justify-between">
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {time}
                    <span className={`ml-2 inline-block px-2 py-0.5 bg-${color}-100 text-${color}-600 rounded`}>
                      {label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Transactions</h3>
            <div className="text-sm">
              <a className="text-blue-600 mr-3" href="#">All</a>
              <a className="text-gray-500 mr-3" href="#">Success</a>
              <a className="text-gray-500" href="#">Pending</a>
            </div>
          </div>

          <ul className="space-y-4 text-sm">
            {[
              ["AI", "Apple Inc.", "#ABLE-PRO-T00232", "$210,000", "↓ 10.6%", "red"],
              ["SM", "Spotify Music", "#ABLE-PRO-T10232", "-10,000", "↑ 30.6%", "green"],
              ["MD", "Medium", "06:30 pm", "-26", "≈ 5%", "orange"],
              ["U", "Uber", "08:40 pm", "+210,000", "↑ 10.6%", "green"],
            ].map(([icon, title, sub, money, change, color]) => (
              <li key={title} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">{icon}</div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-xs text-gray-400">{sub}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold">{money}</div>
                  <div className={`text-xs text-${color}-500 mt-1`}>{change}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 border rounded text-sm">View all Transaction History</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Create new Transaction</button>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Monthly Revenue</h3>
            <MoreVertical className="text-gray-400" />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <div className="font-semibold text-lg">$746.5k <span className="text-green-500 text-xs">+20.6</span></div>
            <div className="text-xs text-gray-400">Past 30 days</div>
          </div>

          <ul className="space-y-3 text-sm">
            {[
              ["Logicoma", "- $72", "red"],
              ["UAC", "$199", "green"],
            ].map(([name, amount, color]) => (
              <li key={name} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{name}</div>
                  <div className="text-xs text-gray-400">Customer</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Team</div>
                  <div className={`text-${color}-500`}>{amount}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Payment History</h3>
            <div className="flex items-center gap-2">
              <Plus className="text-gray-400" />
              <MoreVertical className="text-gray-400" />
            </div>
          </div>

          <ul className="space-y-3 text-sm">
            {[
              ["P", "Paypal", "+210,000", "green"],
              ["G", "Gpay", "-$2,000.00", "red"],
              ["T", "Phone Pay", "-$2,000", "red"],
            ].map(([icon, title, amount, color]) => (
              <li key={title} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 bg-${color === "green" ? "blue" : "gray"}-50 rounded flex items-center justify-center`}>
                    {icon}
                  </div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-xs text-gray-400">{amount}</div>
                  </div>
                </div>
                <div className={`text-${color}-500 text-sm`}>
                  {color === "green" ? "+30.6%" : "-30.6%"}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-center">
            <button className="text-sm px-4 py-1 border rounded">View all</button>
          </div>
        </div>

        {/* Add New Task */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Add new task</h3>
            <MoreVertical className="text-gray-400" />
          </div>

          <div className="text-sm text-gray-600 mb-3">
            New Tasks <span className="text-xs bg-gray-100 px-2 py-0.5 rounded ml-2">20</span>
          </div>

          <div className="mb-3">
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: "30%" }}></div>
            </div>
          </div>

          <ul className="space-y-2 text-sm">
            {[
              ["Introduction form", 2],
              ["Creating Wireframe", 8]
            ].map(([label, num]) => (
              <li key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{label}</span>
                </div>
                <span className="text-xs text-gray-400">{num}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">+ Add task</button>
        </div>

      </div>

      {/* ========== BOTTOM GRID (3 Columns) ========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {/* Incoming Requests */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold mb-3">Incoming Requests</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              You have incoming requests
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              You have 2 pending requests..
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              You have 3 pending tasks
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              New order received
            </li>
          </ul>

          <div className="mt-3 text-sm">
            <a className="text-blue-600" href="#">Show more</a>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Total Revenue</h3>
          <ul className="divide-y">
            {[
              ["Bitcoin", "+ $145.85", "green"],
              ["Ethereum", "- $6.368", "red"],
              ["Ripple", "+ $458.63", "green"],
            ].map(([name, amount, color]) => (
              <li key={name} className="py-2 flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 bg-${color}-200 rounded-full`}></div>
                  <div>{name}</div>
                </div>
                <div className={`text-${color}-500`}>{amount}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Tasks</h3>
            <a className="text-sm text-blue-600" href="#">View all</a>
          </div>

          <ul className="space-y-3 text-sm text-gray-600">
            {[
              ["Call to customer Jacob and discuss the", "8:50", "green"],
              ["Design mobile Application", "Sat, 5 Mar", "blue"],
              ["Jenny assign you a task Mockup Design.", "Sun, 17 Feb", "red"],
            ].map(([title, time, color]) => (
              <li key={title} className="flex items-start gap-3">
                <div className={`w-2 h-2 bg-${color}-500 rounded-full mt-1`}></div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-xs text-gray-400">{time}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-3 text-sm">
            <a className="text-blue-600" href="#">View Friend List</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-400">
        © Able Pro crafted with ♥ by Team Phoenixcoded
      </div>
    </div>
  );
}
