import { useState } from "react";
import { Switch } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { LuBellRing, LuLayoutList, LuLayoutPanelLeft, LuLock, LuPackage, LuReceiptText, LuSquareUserRound, LuUser, LuUserPlus } from "react-icons/lu";

const settingsOptions = [
  { name: "My detail", icon: <LuLayoutList /> },
  { name: "Profile", icon: <LuSquareUserRound /> },
  { name: "Password", icon: <LuLock /> },
  { name: "Notifications", icon: <LuBellRing /> },
  { name: "Team", icon: <LuUser /> },
  { name: "Billing", icon: <LuReceiptText /> },
  { name: "Apps", icon: <LuLayoutPanelLeft /> },
  { name: "Branding", icon: <LuPackage /> },
  { name: "Invite", icon: <LuUserPlus /> },
];

const notifications = [
  { title: "News and updates", desc: "News about product and feature updates" },
  { title: "Tips and tutorials", desc: "News about product and feature updates" },
  { title: "User research", desc: "Get involved in our beta testing program" },
  { title: "Comments", desc: "Comment on your posts and replies to comments." },
  { title: "Reminders", desc: "Notifications to remind you of updates you missed." },
  { title: "Comments", desc: "Comment on your posts and replies to comments." },
  { title: "Reminders", desc: "Notifications to remind you of updates you missed." },
  { title: "More activity about you", desc: "Notifications for posts on your profile." },
];

function Settings() {
  const [enabled, setEnabled] = useState(Array(notifications.length).fill(false));

  return (
    <div className="flex flex-col pl-52 items-center mt-12 bg-blue-50 w-full">
      <div className="flex min-h-screen w-full bg-gray-50 p-0">
        {/* Sidebar */}
        <div className="w-1/5 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-md mb-6 font-semibold">Settings</h2>
          <ul className="mt-4 space-y-3">
            {settingsOptions.map((item, index) => (
              <li key={index} className="flex items-center text-gray-500 hover:text-blue-600 cursor-pointer">
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Settings */}
        <div className="w-3/4 ml-0 bg-white p-6 rounded-lg shadow-md flex">
          {/* First Column */}
          <div className="w-1/2 pr-6">
            <h2 className="text-sm font-semibold">Email Notification</h2>
            <p className="text-gray-500 text-xs">Get emails to find out what’s going on when you’re not online.</p>
            <h3 className="mt-44 text-sm font-semibold">Push Notifications</h3>
            <p className="text-gray-500 text-xs">Receive push notifications on your devices.</p>
            <h3 className="mt-64 text-sm font-semibold"><LuLayoutList/>Advanced Filters</h3>
            <p className="text-gray-500 text-xs">Fine-tune the notifications you’d like to see and those you don’t.</p>
            
          </div>

          {/* Second Column */}
          <div className="w-1/2">
            {notifications.map((notification, index) => (
              <div key={index} className="flex justify-between items-center border-b py-3">
                <div>
                  <h3 className="font-semibold text-sm">{notification.title}</h3>
                  <p className="text-gray-500 text-xs">{notification.desc}</p>
                </div>
                
                <button className="mt-2 flex px-2 py-2 text-xs  border border-b-2  hover:bg-blue-300 hover:text-black cursor-pointer text-gray-700 rounded-lg">Suggested <ChevronDown className="w-2 h-2 mt-1"/></button>
              </div>
              
            ))}
             <button className="mt-2 items-end justify-end px-2 py-2 text-xs  border  hover:border-2 hover:text-blue-800 cursor-pointer border-b-2 text-gray-700 rounded-lg">Set up filters</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Settings;
