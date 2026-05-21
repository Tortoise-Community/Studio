import React, { useState, useEffect, useRef } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header({ onMenuClick }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const menuRef = useRef(null);
  const notifyRef = useRef(null);

  const user = {
    avatarUrl: "https://lairesit.sirv.com/Tortoise/ryuga.jpg",
  };

  const notifications = [
    // {
    //   id: 1,
    //   type: "info",
    //   title: "Raid Detected",
    //   time: "2m ago",
    //   desc: 'Server "Dev Hub" under high-load telemetry.',
    // },
    // {
    //   id: 2,
    //   type: "info",
    //   title: "API Update",
    //   time: "1h ago",
    //   desc: "Hermes v4.2 is now live in production.",
    // },
    // {
    //   id: 3,
    //   type: "info",
    //   title: "Key Expiring",
    //   time: "3h ago",
    //   desc: "Your Studio API key expires in 2 days.",
    // },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setShowUserMenu(false);
      if (notifyRef.current && !notifyRef.current.contains(e.target))
        setShowNotifications(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="master-header">
      <div className="header-section left">
        <button className="menu-toggle" onClick={onMenuClick}>
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div
          className="beta-warning-badge"
          title="Backend API integration pending. Design is subject to change"
        >
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>β</span>
        </div>
      </div>

      <div className="header-section center">
        <div className="master-branding">
          <div className="brand-logo">
            <img
              src="https://lairesit.sirv.com/Tortoise/tortoise-logo.png"
              alt="Logo"
              className="brand-img"
            />
          </div>
          <span className="brand-name">Studio</span>
        </div>
      </div>

      <div className="header-section right">
        <a
          href="https://patreon.com/"
          target="_blank"
          rel="noreferrer"
          className="support-action"
        >
          <i className="fa-brands fa-patreon"></i>
          <span className="d-none d-lg-inline">Support Us</span>
        </a>

        <div className="util-wrapper" ref={notifyRef}>
          <button
            className={`header-util-btn ${showNotifications ? "active" : ""}`}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className="fa-solid fa-bell"></i>
            {notifications.length !== 0 ? (
              <span className="notification-badge"></span>
            ) : (
              <></>
            )}
          </button>

          {showNotifications && (
            <div className="notification-panel">
              <div className="panel-header">
                <span>Notifications</span>
                {notifications.length !== 0 ? (
                  <button className="mark-read">Mark all as read</button>
                ) : (
                  <></>
                )}
              </div>
              <div className="panel-body">
                {notifications.length !== 0 ? (
                  notifications.map((n) => (
                    <div key={n.id} className={`notify-item ${n.type}`}>
                      <div className="notify-top">
                        <span className="notify-title">{n.title}</span>
                        <span className="notify-time">{n.time}</span>
                      </div>
                      <p className="notify-desc">{n.desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="notify-item">
                    <p className="notify-desc center">
                      It's eerily quiet here{" "}
                      <i className="fa-solid fa-ghost"></i>
                    </p>
                  </div>
                )}
              </div>
              <div className="panel-footer">
                <button>View all activity</button>
              </div>
            </div>
          )}
        </div>

        <div className="user-profile-area" ref={menuRef}>
          <button
            className="profile-trigger"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <img src={user.avatarUrl} alt="User" className="user-avatar-img" />
          </button>

          {showUserMenu && (
            <div className="profile-dropdown">
              <div className="dropdown-label">Account</div>
              <Link className="dropdown-link" to="/settings">
                <i className="fa-solid fa-user-gear"></i> Settings
              </Link>
              <Link className="dropdown-link">
                <i className="fa-solid fa-circle-info"></i> Support
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-link logout" to="/">
                <i className="fa-solid fa-power-off"></i> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
