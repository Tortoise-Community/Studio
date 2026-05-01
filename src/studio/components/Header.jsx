import React, { useState, useEffect, useRef } from "react";
import "./styles/Header.scss";

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);
  const user = {
    avatarUrl: "https://lairesit.sirv.com/Tortoise/tortoise-logo.png",
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="master-header">
      <div className="header-section left"></div>

      <div className="header-section center">
        <div className="master-branding">
          <div className="brand-logo">
            <img
              src="https://lairesit.sirv.com/Tortoise/tortoise-logo.png"
              alt="Studio Logo"
              className="brand-img"
            />
          </div>
          <span className="brand-name">Studio</span>
        </div>
      </div>

      <div className="header-section right">
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
              <button className="dropdown-link">
                <i className="fa-solid fa-user-gear"></i> Settings
              </button>
              <button className="dropdown-link">
                <i className="fa-solid fa-circle-info"></i> Support
              </button>
              <div className="dropdown-divider" />
              <button className="dropdown-link logout">
                <i className="fa-solid fa-power-off"></i> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
