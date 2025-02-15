import React, { useState, useEffect } from "react";
import { Sun, Moon, Plus, BellIcon, Search, ChevronDown, ListTodoIcon, BarChart3Icon, CalendarCheck2, LayoutDashboard, FileQuestion, ReceiptIcon, Settings } from "lucide-react";
import pfp from "/src/assets/pfp.png";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { link: "Dashboard", path: "/", icon: LayoutDashboard },
  { link: "Calendar", path: "/calendar", icon: CalendarCheck2 },
  { link: "Task", path: "/task", icon: ListTodoIcon },
  { link: "Analytics", path: "/analytics", icon: BarChart3Icon },
  { link: "Equipments", path: "/equipments", icon: FileQuestion },
  { link: "Billings", path: "/billings", icon: ReceiptIcon }
];

const settingsLink = { link: "Settings", path: "/settings", icon: Settings };

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="w-52 z-20 flex flex-col justify-between p-4 bg-[#FDFDFD] border-r shadow-lg h-full fixed">
        <div>
          <div className="text-orange-600 text-3xl font-bold pl-14 mt-6 mb-11">Logo</div>
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                navigate(item.path);
              }}
              className={`flex items-center space-x-4 w-full px-4 py-2 text-md text-gray-600 rounded-xl transition-all duration-300 ${
                activeIndex === index ? "bg-[#ff5a27] text-white" : "text-black"
              }`}
            >
              {React.createElement(item.icon, { className: "w-4" })}
              <span>{item.link}</span>
            </button>
          ))}
        </div>
        {/* Settings Button at the Bottom */}
        <button
          onClick={() => {
            setActiveIndex(navLinks.length);
            navigate(settingsLink.path);
          }}
          className={`flex items-center space-x-4 w-full px-4 py-2 text-md text-gray-600 rounded-xl transition-all duration-300 ${
            activeIndex === navLinks.length ? "bg-[#ff5a27] text-white" : "text-black"
          }`}
        >
          {React.createElement(settingsLink.icon, { className: "w-4" })}
          <span>{settingsLink.link}</span>
        </button>
      </div>

      {/* Top Navbar */}
      <div className="fixed left-48 right-0 bg-blue-50 flex items-center p-3 z-10">
        <div className="flex w-1/2 border shadow-md py-2 px-6 text-sm text-gray-400 rounded-xl bg-white mx-4">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search events, partners, or equipment"
            className="w-full bg-transparent focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
        <button className="bg-orange-500 flex items-center gap-2 text-white px-6 py-2 text-sm rounded-full shadow-md hover:bg-orange-600 transition-all">
  <Plus className="w-5 h-5" />
  <span className="font-medium">Add</span>
  <ChevronDown className="w-4 h-4" />
</button>
    </div>
        <div className="flex items-center space-x-3 ml-auto pr-4">
          <Sun className="w-5 h-5 text-black" />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-10 h-5 flex border border-gray-400 bg-gray-100 rounded-full  transition"
          >
            <div
              className={`absolute w-5 h-5 border border-gray-400 bg-white rounded-full shadow-lg transform transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </button>
          <Moon className="w-5 h-5 text-black" />
          <BellIcon className="w-6 h-6 text-black" />
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <ChevronDown className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;