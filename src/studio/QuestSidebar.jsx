import React from "react";
import "./styles/QuestSidebar.scss";

export default function QuestSidebar() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const leaderboard = [
    { rank: 1, name: "AlphaCoder", xp: 12450 },
    { rank: 2, name: "ByteCommander", xp: 11200 },
    { rank: 3, name: "Studio_Fan", xp: 9800 },
  ];

  return (
    <div className="quest-sidebar-inner">
      {/* New Simplified Session Header */}
      <div className="sidebar-top-header">
        <div className="session-info">
          <span className="date-label">{today}</span>
          <h4>Active Session</h4>
          <p className="session-status">You are on track for Day 3</p>
        </div>
      </div>

      <div className="sidebar-scroll-content">
        {/* 1. Personal Stats Card */}
        <div className="sidebar-card profile-stats">
          <div className="streak-badge">
            <i className="fa-solid fa-fire"></i>
            <span className="count">12</span>
            <span className="label">Day Streak</span>
          </div>
          <div className="xp-info">
            <div className="xp-header">
              <span>Level 5</span>
              <span>2,450 / 3,000 XP</span>
            </div>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* 2. Mini Leaderboard */}
        <div className="sidebar-card leaderboard">
          <h3 className="card-title">Top Seekers</h3>
          <div className="leader-list">
            {leaderboard.map((user) => (
              <div key={user.rank} className="leader-item">
                <span className="rank">{user.rank}</span>
                <span className="name">{user.name}</span>
                <span className="xp">{user.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
          <button className="view-all-btn">View Global Standings</button>
        </div>

        {/* 3. Badges */}
        <div className="sidebar-card rewards">
          <h3 className="card-title">Earned Badges</h3>
          <div className="badge-grid">
            <div className="badge-slot unlocked">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div className="badge-slot unlocked">
              <i className="fa-solid fa-bug-slash"></i>
            </div>
            <div className="badge-slot unlocked">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div className="badge-slot locked">
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
