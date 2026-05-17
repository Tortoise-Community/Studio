import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.scss";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const dsaTopics = [
    {
      title: "Arrays & Hashing",
      progress: 85,
      count: "12/15",
      icon: "fa-layer-group",
    },
    {
      title: "Two Pointers",
      progress: 60,
      count: "6/10",
      icon: "fa-arrows-left-right",
    },
    {
      title: "Sliding Window",
      progress: 30,
      count: "3/10",
      icon: "fa-window-maximize",
    },
    {
      title: "Stack & Queues",
      progress: 50,
      count: "5/10",
      icon: "fa-list-ol",
    },
    { title: "Linked Lists", progress: 40, count: "4/10", icon: "fa-link" },
    {
      title: "Trees & Graphs",
      progress: 10,
      count: "1/20",
      icon: "fa-diagram-project",
    },
    {
      title: "Binary Search",
      progress: 20,
      count: "2/10",
      icon: "fa-magnifying-glass",
    },
    {
      title: "Dynamic Programming",
      progress: 0,
      count: "0/25",
      icon: "fa-brain",
    },
  ];

  return (
    <div
      className={`studio-shell ${isSidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}
    >
      <div className="main-stage">
        <div className="stage-content">
          <div className="dashboard-hero-row">
            <div className="welcome-box">
              <h2>
                Welcome back, <span>Ryuga</span>
              </h2>
              <p>
                Your current streak: <span className="gold">12 Days</span> 🔥
              </p>
            </div>

            <div className="daily-challenge-card">
              <div className="card-tag">DAILY CHALLENGE</div>
              <h3>42. Trapping Rain Water</h3>
              <div className="challenge-meta">
                <span className="diff hard">Hard</span>
                <span className="points">+50 XP</span>
              </div>
              <button className="btn-solve">Solve Now</button>
            </div>
          </div>

          <div className="studio-grid">
            <div className="grid-main-area">
              <Link to="/problems" className="practice-cta-card">
                <div className="cta-content">
                  <div className="text-side">
                    <span className="cta-tag">READY TO CODE?</span>
                    <h3>Explore Problem Sets</h3>
                    <p>
                      Access 500+ curated DSA questions categorized by
                      difficulty and patterns.
                    </p>
                  </div>
                  <div className="icon-side">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Link>

              <div className="section-title">Algorithmic Roadmap</div>
              <div className="topics-grid">
                {dsaTopics.map((topic, i) => (
                  <div key={i} className="topic-card">
                    <div className="topic-icon">
                      <i className={`fa-solid ${topic.icon}`}></i>
                    </div>
                    <div className="topic-info">
                      <h4>{topic.title}</h4>
                      <p>{topic.count} Solved</p>
                      <div className="progress-bar">
                        <div
                          className="fill"
                          style={{ width: `${topic.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid-side-area">
              <Link to="/login" className="api-access-card">
                <div className="api-header">
                  <i className="fa-solid fa-microchip"></i>
                  <span>DEV PORTAL</span>
                </div>
                <h4>API Platform</h4>
                <p>
                  Integrate Hermes code execution engine to your applications
                </p>
                <div className="api-footer">
                  <span>View Documentation</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </Link>

              <div className="stats-card">
                <h3>Submission Stats</h3>
                <div className="stat-row">
                  <span>Easy</span>
                  <span className="mono gold">45/50</span>
                </div>
                <div className="stat-row">
                  <span>Medium</span>
                  <span className="mono gold">12/100</span>
                </div>
                <div className="stat-row">
                  <span>Hard</span>
                  <span className="mono gold">2/50</span>
                </div>
              </div>

              <div className="heatmap-card">
                <h3>Consistency</h3>
                <div className="heatmap-grid">
                  {[...Array(28)].map((_, i) => (
                    <div
                      key={i}
                      className={`heat-cell level-${Math.floor(Math.random() * 4)}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
