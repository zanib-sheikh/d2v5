import { useState } from "react";
import { BookOpen, ListTodo, Inbox, Home, User, Building, Briefcase, Calendar, ShoppingCart, Folder } from "lucide-react";
import { LuListCheck } from "react-icons/lu";

const Task = () => {
  const [tasks, setTasks] = useState({
    "Want-to-do": ["To live more economically", "To reduce stress on the job"],
    "Prepare-to-do": ["To exercise more", "To eat healthier", "To lose weight"],
    Doing: ["To spend more time with family", "To spend less time on social media"],
    Done: ["To pay a loan", "To quit smoking"],
    Lists: [
      { name: "Collaborative Book", icon: <BookOpen size={16} /> },
      { name: "Work to-Do", icon: <ListTodo size={16} /> },
      { name: "INBOX", icon: <Inbox size={16} /> },
      { name: "HOME", icon: <Home size={16} /> },
      { name: "Personal", icon: <User size={16} /> },
      { name: "Household", icon: <Building size={16} /> },
      { name: "Weekend Project", icon: <Briefcase size={16} /> },
      { name: "Someday", icon: <Calendar size={16} /> },
      { name: "Shopping List", icon: <ShoppingCart size={16} /> },
      { name: "WORK", icon: <Folder size={16} /> },
    ],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col pl-32 items-center mt-12 bg-blue-50 w-full">
      <div className="bg-white p-3 min-h-fit">
        <div className="grid grid-cols-5 mt-6 gap-2 w-[870px] h-[500px]">
          {Object.entries(tasks).map(([category, items]) => (
            <div key={category} className="bg-white p-0 rounded-lg">
              {category === "Lists" ? (
                <>
                  <button 
                    className="font-semibold text-md py-2 border-2 rounded-md pl-2 hover:bg-gray-200 text-gray-700 w-full text-left flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <LuListCheck className="px-2 w-8 h-8"/> {category} {isDropdownOpen ? "" : ""}
                  </button>
                  {isDropdownOpen && (
                    <ul className="mt-2 text-xs space-y-2 bg-gray-100 rounded-md p-2">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                          {item.icon} <span className="text-gray-600">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <h2 className="font-semibold text-md py-2 border rounded-md pl-2 text-gray-700">{category}</h2>
                  <button className="mt-2 w-[160px] bg-gray-100 border text-gray-600 px-2 py-2 text-start rounded-lg text-sm">
                    + New Task
                  </button>
                  <ul className="mt-4 text-xs space-y-2">
                    {items.map((task, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
