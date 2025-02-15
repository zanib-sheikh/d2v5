import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BarChart, Bar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import GaugeChart from "react-gauge-chart";
const Analytics = () => {
  const projectData = [
    { name: "Nelsa Web Development", manager: "Om Prakash", date: "May 25, 2023", status: "Completed", progress: 100 },
    { name: "Datascale AI App", manager: "Neilsan Mando", date: "Jun 20, 2023", status: "Delayed", progress: 38 },
    { name: "Media Branding", manager: "Tiruvelly Priya", date: "Jul 13, 2023", status: "At Risk", progress: 88 },
    { name: "Corlax iOS App", manager: "Matte Hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
    { name: "Website Builder", manager: "Sukumar Rao", date: "Mar 15, 2024", status: "On Going", progress: 50 },
    { name: "Corlax iOS App", manager: "Matte Hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
    { name: "Corlax iOS App", manager: "Matte Hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
    { name: "Corlax iOS App", manager: "Matte Hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
  ];
  
  const numTicks = 45; // Number of tick marks
  const radius = 48; // Radius of the gauge
  const tickLength = 3; // Length of each tick


  const daata = [
    { day: "M", sales: 2000 },
    { day: "T", sales: 3000 },
    { day: "W", sales: 2200 },
    { day: "T", sales: 2800 },
    { day: "F", sales: 5700 },
    { day: "S", sales: 3500 },
    { day: "S", sales: 4500 },
  ];

  const data = [
    { value: 40 },
    { value: 60 },
    { value: 30 },
    { value: 80 },
    { value: 50 },
    { value: 70 },
    { value: 40 },
    { value: 60 },
    { value: 50 },
    { value: 90 },
    { value: 50 },
    { value: 70 },
  ];

  const dataa = [
    { value: 40 },
    { value: 60 },
    { value: 30 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 80 },
    { value: 60 },
    { value: 50 },
    { value: 90 },
    { value: 40 },
    { value: 40 },
  ];
  
  return (

    <div className="flex flex-col  pl-32 items-center mt-12 bg-blue-50 w-full">
      
      
      <div className="w-full max-w-4xl flex flex-col justify-between mt-8  mb-3">
    
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>

        {/* Cards + Project Summary + Overall Progress Row */}
        <div className="grid grid-cols-4 w-full gap-4">
          {/* 3 Cards */}
          <div className="grid grid-cols-3 w-[890px] h-[200px] gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
      {/* Revenue Header */}
      <div className="text-left mb-2">
        <p className="text-gray-400 text-sm">Revenue</p>
        <p className="font-bold text-md">$8900.70</p>
      </div>

      {/* Chart */}
      <div className="w-full h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar
              dataKey="value"
              fill="url(#gradient)"
              radius={[20, 20, 0, 0]}
              barSize={12}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#E0E7FF" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
      {/* Revenue Header */}
      <div className="text-left mb-2">
        <p className="text-gray-400 text-sm">Expenses</p>
        <p className="font-bold text-md">$4200.30</p>
      </div>

      {/* Chart */}
      <div className="w-full h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataa}>
            <Bar
              dataKey="value"
              fill="url(#gradient)"
              radius={[20, 20, 0, 0]}
              barSize={12}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A65CD5" />
                <stop offset="100%" stopColor="#8740B4" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
      {/* Sales Header */}
      <div className="text-left mb-2">
        <p className="text-gray-400 text-sm">Sales</p>
        <p className="font-bold mb-4 text-lg">5248</p>
      </div>

      {/* Chart */}
      <div className="w-full pr-8 h-28">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={daata}>
            <XAxis dataKey="day" tick={{ fill: "#94A3B8" }} />
            <YAxis tick={{ fill: "#94A3B8" }} />
            <Tooltip contentStyle={{ borderRadius: "8px" }} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="url(#gradient)"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 2 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#E0E7FF" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
           


          </div>

         
        </div>

        {/* Project Summary and Overall Progress in the same row */}
<div className="flex w-full gap-5 mt-6">

{/* Project Summary */}
<div className="bg-white w-4/5 shadow-md rounded-lg px-3 py-1">
  <h2 className="text-lg font-bold mb-2 mt-2">Project Summary</h2>
  <div className="max-h-70 overflow-auto">
    <table className="w-full font-normal  text-[10px] text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-0.5">Name</th>
          <th className="p-0.5">Project Manager</th>
          <th className="p-0.5">Due Date</th>
          <th className="p-0.5">Status</th>
          <th className="p-0.5">Progress</th>
        </tr>
      </thead>
      <tbody>
        {projectData.map((project, index) => (
          <tr key={index} className="border-b">
            <td className="p-0.5 text-[12px]">{project.name}</td>
            <td className="p-0.5 text-[12px]">{project.manager}</td>
            <td className="p-0.5 text-[12px]">{project.date}</td>
            <td className={`p-0.5 font-bold text-[10px] ${
              project.status === "Completed" ? "text-green-600" :
              project.status === "Delayed" ? "text-orange-500" :
              project.status === "At Risk" ? "text-red-500" :
              "text-blue-500"
            }`}>
              {project.status}
            </td>
            <td className="p-0.5 text-[12px]">
              <div className="w-8 h-8">
                <CircularProgressbar 
                  value={project.progress} 
                  text={`${project.progress}%`} 
                  styles={buildStyles({
                    textSize: "25px",
                    pathColor: project.progress >= 80 ? "green" : project.progress >= 50 ? "orange" : "red",
                  })}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



<div className="relative bg-white w-[300px] shadow-md rounded-lg flex flex-col p-3">
      <h2 className="text-lg font-bold text-left mb-11">Overall Progress</h2>

      {/* Chart & Ticks Container */}
      <div className="relative w-full flex justify-center">
        <GaugeChart
          id="gauge-chart"
          nrOfLevels={3}
          percent={0.72} // 72% progress
          colors={["#4CAF50", "#FFB400", "#FF5722"]} // Green → Yellow → Red
          arcWidth={0.3} // Adjust thickness
          needleColor="#464A4F"
          textColor="#000"
          hideText={false} // Show percentage
          arcPadding={0} // No space between segments
        />

        {/* SVG for Tick Marks */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="5 0 90 59">
          {Array.from({ length: numTicks }).map((_, index) => {
            const angle = ((index / (numTicks - 1)) * 180) - 360; // Proper alignment
            const x1 = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y1 = 50 - radius * Math.sin((angle * Math.PI) / 180);
            const x2 = 50 + (radius + tickLength) * Math.cos((angle * Math.PI) / 180);
            const y2 = 50 - (radius + tickLength) * Math.sin((angle * Math.PI) / 180);

            return (
              <line
                key={index}
                x1={`${x1}`} y1={`${y1}`}
                x2={`${x2}`} y2={`${y2}`}
                stroke="black" strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Project Stats */}
      <div className="flex justify-around text-xs px-4 mt-8">
        <div className="text-center">
          <p className="text-lg font-bold">95</p>
          <p className="text-gray-500">Total projects</p>
        </div>
        <div className="text-center ">
          <p className="text-lg text-green-600 font-bold">26</p>
          <p className="text-gray-500">Completed</p>
        </div>
        <div className="text-center ">
          <p className="text-lg text-yellow-500 font-bold">35</p>
          <p className="text-gray-500">Delayed</p>
        </div>
        <div className="text-center ">
          <p className="text-lg text-orange-500 font-bold">35</p>
          <p className="text-gray-500">Ongoing</p>
        </div>
      </div>
    </div>





</div>

          </div>
    </div>
  );
};

export default Analytics;
