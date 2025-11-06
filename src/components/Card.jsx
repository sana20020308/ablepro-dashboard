export default function Card({ title, value, change, color }) {
  const colors = {
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
    red: "text-red-600",
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-sm text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className={`text-2xl font-bold ${colors[color]}`}>{value}</p>
        <span className="text-sm text-gray-400">{change}</span>
      </div>
    </div>
  );
}
