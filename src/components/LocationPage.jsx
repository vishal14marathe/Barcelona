import { useParams } from "react-router-dom";
import locations from "../data/locations";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LocationPage() {
  const { slug } = useParams();
  const data = locations.find((item) => item.slug === slug);

  if (!data)
    return <h1 className="p-20 text-3xl">404 - Location Not Found</h1>;

  return (
    <div className="min-h-screen w-full bg-white font-sans px-10 py-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full mb-16">
        <div className="flex items-center space-x-2 text-xl font-semibold">
          <span className="text-indigo-600 text-2xl">💡</span>
          <span>
            Know Your <span className="text-indigo-600">Trips</span>
          </span>
        </div>

        <div className="flex items-center space-x-10 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600">
            Blogs
          </a>
          <a href="#" className="hover:text-indigo-600">
            About
          </a>
          <a href="#" className="hover:text-indigo-600">
            Contact
          </a>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition-all">
          Download the App
        </button>
      </nav>

      {/* Main Section */}
      <div className="flex w-full items-start justify-between">
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-snug mb-6">
            Is <span className="text-gray-900">{data.name} Safe?</span>
            <span className="ml-3 text-indigo-600 text-5xl">🛡️</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            {data.description}
          </p>

          <div className="space-y-6 text-gray-700 text-lg">
            {data.risks.map((risk, index) => (
              <div className="flex items-center space-x-4" key={index}>
                <div className="w-7 h-7 rounded-lg bg-white shadow-md"></div>
                <span>{risk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="w-96 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-1">{data.name}</h2>
          <p className="text-green-600 font-medium mb-5">
            ({data.safetyStatus})
          </p>

          <div className="flex items-center justify-between text-xl font-semibold mb-6">
            <span>{data.rating}</span>
            <div className="flex-1 mx-2 h-6 bg-green-200 rounded-lg"></div>
            <span>10</span>
          </div>

          {/* Crime Graph */}
          <div className="w-full h-56 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.chartData}>
                <XAxis dataKey="month" stroke="#555" />
                <YAxis stroke="#555" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="crime2025"
                  stroke="#FFD43B"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="crime2024"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Crime in 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>Crime in 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
