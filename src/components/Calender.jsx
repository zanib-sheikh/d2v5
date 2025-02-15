import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import dayjs from "dayjs";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Function to change the month
  const changeMonth = (direction) => {
    setCurrentDate(currentDate.add(direction, "month"));
  };

  // Function to change the day
  const changeDay = (direction) => {
    setCurrentDate(currentDate.add(direction, "day"));
  };

  const startOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Sample events
  const events = [
    { date: 5, label: "Meeting", color: "border-blue-500" },
    { date: 8, label: "Appointment", color: "border-orange-500" },
    { date: 10, label: "Wedding", color: "border-purple-500" },
    { date: 16, label: "Rent", color: "border-purple-500" },
    { date: 20, label: "Rent", color: "border-purple-500" },
    { date: 25, label: "Photo Booth", color: "border-orange-500" },
    { date: 29, label: "UFC", color: "border-blue-500" },
  ];

  return (
    <div className="pl-32 mt-12 bg-blue-50 min-h-screen flex flex-col items-center">
      {/* Header with Calendar title and Add button */}
      <div className="w-full max-w-4xl flex justify-between mt-8 items-center mb-16">
        <h2 className="text-3xl font-bold">Calender</h2>

        {/* Plus Button */}
        <button className="bg-orange-600 text-white p-3 rounded-full shadow-lg">
          <FaPlus size={12} />
        </button>
      </div>

      {/* Month and Day Buttons */}
      <div className="w-full max-w-4xl flex justify-start items-start mb-2 pl-11">
        {/* Month Selector */}
        <div className="flex items-center justify-center text-sm bg-orange-500 text-white px-0 py-2 rounded-full shadow-md space-x-2">
  <button onClick={() => changeMonth(-1)} className="text-white hover:text-pink-800 px-2">
  <ChevronsLeft size={16} />
  </button>
  <span className="font-semibold whitespace-nowrap">{currentDate.format("MMMM YYYY")}</span>
  <button onClick={() => changeMonth(1)} className="text-white hover:text-pink-800 px-2">
  <ChevronsRight size={16} />
  </button>
</div>


        {/* Day Selector */}
        <div className="w-full max-w-4xl flex justify-end space-x-2 text-sm items-end mt-2 mb-2">
        <div className="rounded-full w-8 h-8 bg-white shadow-md">
        <button onClick={() => changeDay(-1)} className="text-gray-600 mt-2 hover:text-black px-2">
        <ChevronsLeft size={16} />
          </button>
          </div>
        <div className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm">
         
          <span className="font-semibold">{currentDate.format("DD MMMM YYYY")}</span>
          
        </div>

<div className="rounded-full w-8 h-8 bg-white shadow-md ">
        <button onClick={() => changeDay(1)} className="text-gray-600 mt-2 hover:text-black px-2">
        <ChevronsRight size={16} />
          </button> </div>


      </div>
      </div>

      {/* Calendar */}
      <div className="w-full max-w-4xl bg-blue-50 p-4 pr-0  rounded-lg">
        {/* Days of the Week */}
        <div className="grid grid-cols-7 bg-blue-50 gap-2 text-xs text-gray-600 text-center font-semibold">
          {[  "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 bg-blue-50 text-gray-900 text-xs gap-2 mt-2">
          {Array(startOfMonth).fill(null).map((_, i) => (
            <div key={i} className="py-4"></div>
          ))}
          {daysArray.map((day) => (
            <div
              key={day}
              className={`relative py-4  text-center rounded-lg bg-blue-50  ${
                day === currentDate.date() ? "bg-orange-100" : ""
              }`}
            >
              {/* Highlight Selected Day */}
              <span className="absolute top-2 left-2 px-1 py-1 rounded-full">
                {day}
              </span>
              {/* Events */}
              {events.map(
                (event, index) =>
                  event.date === day && (
                    <div
                      key={index}
                      className={`mt-8 mx-1 border-2 ${event.color} text-sm px-1 py-1 rounded-md`}
                    >
                      {event.label}
                    </div>
                  )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
