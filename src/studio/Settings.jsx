import React, { useState } from "react";
import Header from "./components/Header";
import "./styles/Settings.scss";
import Footer from "./Footer";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [username, setUsername] = useState("StudioUser_01");
  const [lcUsername, setLcUsername] = useState("");

  const [notifs, setNotifs] = useState({
    emails: true,
    submissions: true,
    marketing: false,
    security: true,
  });

  const toggleNotif = (key) =>
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="settings-page">
      <div className="settings-layout">
        <aside className="settings-sidebar">
          <div className="sidebar-header">
            <h2>Settings</h2>
          </div>

          <nav className="settings-nav">
            <button
              className={`nav-btn ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <i className="fa-regular fa-user"></i> <span>Profile</span>
            </button>
            <button
              className={`nav-btn ${activeTab === "connections" ? "active" : ""}`}
              onClick={() => setActiveTab("connections")}
            >
              <i className="fa-solid fa-link"></i> <span>Connections</span>
            </button>
            <button
              className={`nav-btn ${activeTab === "notifications" ? "active" : ""}`}
              onClick={() => setActiveTab("notifications")}
            >
              <i className="fa-regular fa-bell"></i> <span>Notifications</span>
            </button>
            <div className="nav-divider"></div>
            <button
              className={`nav-btn danger ${activeTab === "danger" ? "active" : ""}`}
              onClick={() => setActiveTab("danger")}
            >
              <i className="fa-solid fa-skull-crossbones"></i>
              <span>Danger Zone</span>
            </button>
          </nav>
        </aside>

        <main className="settings-main-content">
          <div className="content-scroll-area">
            {activeTab === "profile" && (
              <section className="settings-section">
                <header className="section-header">
                  <h1>Public Profile</h1>
                  <p>How you appear to others in the community.</p>
                </header>

                <div className="setting-card">
                  <div className="form-item">
                    <div className="info">
                      <label>Username</label>
                      <span className="hint">
                        Username must be between 3 and 20 characters.
                      </span>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="small-input"
                      />
                      <button className="btn-small gold">Save</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "connections" && (
              <section className="settings-section">
                <header className="section-header">
                  <h1>Account Connections</h1>
                  <p>Manage your SSO providers and external platforms.</p>
                </header>

                <div className="setting-card">
                  <div className="connection-list">
                    <div className="connection-row">
                      <div className="brand">
                        <i className="fa-brands fa-github"></i> GitHub
                      </div>
                      <button className="btn-small outline">Disconnect</button>
                    </div>

                    <div className="connection-row">
                      <div className="brand">
                        <i className="fa-brands fa-google"></i> Google
                      </div>
                      <button className="btn-small gold">Connect</button>
                    </div>

                    <div className="connection-row complex">
                      <div className="brand">
                        <i className="fa-brands fa-leetcode"></i> LeetCode
                      </div>
                      <div className="control-group">
                        <input
                          type="text"
                          placeholder="LeetCode Username"
                          value={lcUsername}
                          onChange={(e) => setLcUsername(e.target.value)}
                          className="small-input"
                        />
                        <button className="btn-small gold">Link</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "notifications" && (
              <section className="settings-section">
                <header className="section-header">
                  <h1>Notifications</h1>
                  <p>Control when and how you want to be alerted.</p>
                </header>

                <div className="setting-card">
                  <div className="toggle-list">
                    <div className="toggle-item">
                      <div className="toggle-info">
                        <strong>Security Alerts</strong>
                        <p>
                          Get notified about new logins and account changes.
                        </p>
                      </div>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={notifs.security}
                          onChange={() => toggleNotif("security")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <strong>Submission Results</strong>
                        <p>Receive updates when your code finish processing.</p>
                      </div>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={notifs.submissions}
                          onChange={() => toggleNotif("submissions")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "danger" && (
              <section className="settings-section">
                <header className="section-header">
                  <h1 className="text-danger">Danger Zone</h1>
                  <p>Permanent actions regarding your Studio data.</p>
                </header>
                <div className="setting-card danger-card">
                  <div className="danger-flex">
                    <div className="info">
                      <strong>Delete Studio Account</strong>
                      <span className="hint">
                        This will erase your progress forever.
                      </span>
                    </div>
                    <button className="btn-small danger-solid">
                      Delete Account
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
