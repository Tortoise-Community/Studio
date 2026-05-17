import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../studio/Login";
import Settings from "../studio/Settings";

import React, { useState } from "react";
import Header from "../studio/components/Header";
import Footer from "../studio/Footer";
import Roadmap from "../studio/Roadmap";
import Editor from "../studio/Editor";
import Problems from "../studio/Problems";
import Dashboard from "../studio/Dashboard";
import SideNav from "../studio/SideNav";

export default function StudioRoutes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="studio-app-wrapper">
              <Header onMenuClick={toggleSidebar} />
              <div className="studio-body">
                <SideNav isOpen={isOpen} onClose={closeSidebar} />
                {isOpen && (
                  <div className="sidebar-overlay" onClick={closeSidebar} />
                )}
                <main className="studio-content">
                  <Routes>
                    <Route path="/solve" element={<Editor />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/problems" element={<Problems />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
