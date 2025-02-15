import React, { useState } from "react";
import { BadgeCheck, CircleEllipsis, Ban, SlidersHorizontal, Plus, Search } from "lucide-react";

function Billings() {
  

  return (
  

    
    <div className="flex flex-col  pl-32 items-center mt-12 bg-blue-50 w-full">
      
      
      <div className="w-full max-w-4xl flex flex-col justify-between mt-8  mb-1">
<h1 className="text-3xl font-bold">Billing</h1>
<p className="my-2">Short description will be placed here</p>
</div>
<div className="md:flex  md:space-x-6 mt-4 text-lg text-white mb-1 ">
      <div className="flex flex-col  bg-[#FFDE59] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
  <BadgeCheck className="w-4 h-4 text-white" />
    <h2 className="text-white">Draft</h2>
  
  </div>
  <div className="flex mt-2 text-white text-sm space-x-9">
  <p className=" text-white">Pies:120</p>
  <p className="text-white">Value:$1200</p>
  </div>
</div>
<div className="flex flex-col  bg-[#71C1E8] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
  <CircleEllipsis className="w-5 h-5 text-white" />
    <h2 className="text-white">Unpaid</h2>
  </div>
  <div className="flex mt-2 text-white text-sm space-x-9">
  <p className=" text-white">Pies:120</p>
  <p className="text-white">Value:$1200</p>
  </div>
</div>
<div className="flex flex-col bg-[#FFA0A3] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
  <Ban className="w-4 h-4 text-white" />
    <h2 className="text-white">Overdue</h2>
    
  </div>
  <div className="flex mt-2 text-white text-sm space-x-9">
  <p className=" text-white">Pies:120</p>
  <p className="text-white">Value:$1200</p>
  </div>
</div>
<div className="flex flex-col bg-[#01B574C4] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
  <BadgeCheck className="w-4 h-4 text-white" />
    <h2 className="text-white">Paid</h2>
  </div>
  <div className="flex mt-2 text-white text-sm space-x-9">
  <p className=" text-white">Pies:120</p>
  <p className="text-white">Value:$1200</p>
  </div>
</div>
</div>


<div className="bg-white p-6 mt-3 rounded-lg shadow-md">
  {/* Navigation Tabs */}
  <div className="flex space-x-6 border-b pb-2 text-sm text-gray-500">
    {["Proforma", "Issued", "Received", "Partners", "Warehouse"].map((tab, index) => (
      <span key={index} className={`cursor-pointer ${tab === "Issued" ? "text-blue-500 border-b-2 border-blue-500" : ""}`}>
        {tab}
      </span>
    ))}
    <div className="pl-72 space-x-7 text-sm text-gray-600 items-end justify-end flex">
    <Plus />
  <Search/>
  <SlidersHorizontal/>
  </div>
  </div>
  

  {/* Table Section */}
  <div className="overflow-x-auto mt-4">
    <table className="w-[820px] border-collapse">
      <thead>
        <tr className="border-b bg-gray-100 text-left">
          {["Invoice", "Date", "Due Date", "Partner", "Amount", "VAT", "Status"].map((header) => (
            <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 text-sm py-2">2025-01</td>
            <td className="px-4 text-sm py-2">July 14, 2015</td>
            <td className="px-4 text-sm py-2">July 14, 2015</td>
            <td className="px-4 text-sm py-2">ZVEZOA.Doc</td>
            <td className="px-4 text-sm py-2">$103</td>
            <td className="px-4  text-sm py-2">244</td>
            <td className="px-4 text-sm py-2">
              {index % 2 === 0 ? (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Paid</span>
              ) : (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">Un Paid</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Action Buttons */}
  
</div>

</div>

  );
}

export default Billings;
