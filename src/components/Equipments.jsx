import React, { useState } from "react";
import { Plus, SlidersHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "In stock", value: 50, color: "#f97316" }, // Orange
    { name: "Low stock", value: 30, color: "#3b82f6" }, // Blue
    { name: "Out of stock", value: 20, color: "#ec4899" }, // Pink
  ];


function Equipments() {
  

  return (
  

    
    <div className="flex flex-col items-center  mt-12 bg-blue-50 pl-36 w-full">
      
      
      <div className="w-full max-w-4xl flex flex-col justify-between mt-8  mb-3">
<h1 className="text-3xl font-bold">Equipments</h1>
<p className="my-2">Short description will be placed here.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
  {/* Header Section */}
  <div className="flex  items-center mb-4 space-x-4">
      <div className=" flex flex-col space-y-1 pl-7 w-1/3">
        <h2 className="text-lg font-semibold">Total Asset Value</h2>
        <p className="text-black font-bold text-3xl">$10,200,232</p>
       
      </div>
      <div className="w-0.5 h-24  bg-gray-400"></div>
      <div className="flex space-x-4">
     
        {/* Pie Chart */}
        <div className="w-28 h-28 ">
           
          <ResponsiveContainer width="120%" height="150%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="40%"
                outerRadius={40}
                innerRadius={25}
                paddingAngle={0} 
              
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex space-x-4 text-xs mt-8">
          {data.map((item, index) => (
            <span key={index} className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></span>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
{/* Action Button */}
<div className=" mt-4   mb-2">
     
<div className="flex justify-end mt-2 mb-2  ">

<div className="flex    space-x-8">
<Plus className="w-5 mt-2 h-5" />

  <SlidersHorizontal className="w-5 mt-2 h-5"/>
    <button className="bg-orange-500 text-white px-3 py-2 text-sm rounded-full">+ Order Stock</button>
    </div>
    </div>
  </div>
  {/* Table Section */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-white text-left">
          {["Name", "Buy Date", "Price", "Where", "Guaranty", "Files", "Warehouse", "Status", "Stock"].map((header) => (
            <th key={header} className="px-4 py-2 font-semibold text-gray-400">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(8)].map((_, index) => (
          <tr key={index} className="border-b text-sm">
            <td className="px-4 py-2">Cover</td>
            <td className="px-4 py-2">July 14, 2025</td>
            <td className="px-4 py-2 text-gray-600">50€</td>
            <td className="px-4 py-2">thomam.de</td>
            <td className="px-4 py-2">03-05-2025</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="px-4 py-2"><span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Good</span></td>
            <td className="px-4 py-2"><span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">In stock</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>

      
    </div>
  );
}

export default Equipments;
