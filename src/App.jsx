import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CalendarPage from "./components/Calender"; // Import Calendar component
import "./App.css";
import Task from "./components/Task";
import Analytics from "./components/Analytics";
import Equipments from "./components/Equipments";
import Billings from "./components/Billings";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navbar />
        {/* Main Content Area */}
        <main className="grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Default Page */}
            <Route path="/calendar" element={<CalendarPage />} /> 
            <Route path="/task" element={<Task />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/equipments" element={<Equipments />} /> 
            <Route path="/billings" element={<Billings />} />
            <Route path="/settings" element={<Settings />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
