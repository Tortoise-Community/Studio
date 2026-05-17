import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/SideNav.scss";

export default function SideNav({ isOpen, onClose }) {
  const location = useLocation();

  const primaryNav = [
    { label: "Dashboard", icon: "fa-solid fa-layer-group", path: "/dashboard" },
    { label: "Problems", icon: "fa-solid fa-terminal", path: "/problems" },
  ];

  const questNav = [
    {
      label: "Learning Roadmap",
      icon: "fa-solid fa-bolt",
      path: "/roadmap",
    },
  ];

  return (
    <aside className={`studio-blade ${isOpen ? "open" : ""}`}>
      <div className="blade-container">
        <div className="blade-header">
          <div className="blade-branding">
            <span className="mono-label">STUDIO</span>
          </div>
          <button className="close-blade" onClick={onClose}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>

        <div className="blade-body">
          <div className="nav-group">
            <span className="group-label">Core</span>
            {primaryNav.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={onClose}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="nav-group quest-group">
            <span className="group-label">Learning</span>
            {questNav.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`quest-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={onClose}
              >
                <div className="quest-icon-box">
                  <i className={item.icon}></i>
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="blade-footer">
          <div className="footer-status">
            <span>Toroise Programming Community</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
