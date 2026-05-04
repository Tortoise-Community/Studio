import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./Footer";
import "./styles/Challenges.scss";
import QuestSidebar from "./QuestSidebar";
const MOCK_QUESTS = [
  {
    day: 1,
    title: "The Beginning",
    unlocked: true,
    problems: [
      { id: 1, name: "Two Sum", status: "solved", difficulty: "Easy" },
      {
        id: 2,
        name: "Reverse Integer",
        status: "solved",
        difficulty: "Medium",
      },
    ],
  },
  {
    day: 2,
    title: "Data Structures Deep Dive",
    unlocked: true,
    problems: [
      {
        id: 3,
        name: "Linked List Cycle",
        status: "solved",
        difficulty: "Easy",
      },
      {
        id: 4,
        name: "Merge K Sorted Lists",
        status: "todo",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 3,
    title: "Dynamic Programming",
    unlocked: false,
    problems: [
      { id: 5, name: "Climbing Stairs", status: "todo", difficulty: "Easy" },
      { id: 6, name: "Coin Change", status: "todo", difficulty: "Medium" },
    ],
  },
];

export default function Challenges() {
  const [quests, setQuests] = useState(MOCK_QUESTS);

  // Calculate Progress
  const allProblems = quests.flatMap((q) => q.problems);
  const solvedCount = allProblems.filter((p) => p.status === "solved").length;
  const progressPercent = Math.round((solvedCount / allProblems.length) * 100);

  return (
    <div className="challenges-page">
      <div className="challenges-main-layout">
        <main className="challenges-content">
          <header className="challenges-header">
            <div className="header-info">
              <h1>Weekly Quest</h1>
              <p>Complete daily challenges to unlock the next chapter.</p>
            </div>

            <div className="progress-section">
              <div className="progress-label">
                <span>Overall Completion</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </header>

          <div className="quest-timeline">
            {quests.map((quest) => (
              <div
                key={quest.day}
                className={`quest-card ${!quest.unlocked ? "locked" : ""}`}
              >
                <div className="quest-sidebar">
                  <div className="day-badge">Day {quest.day}</div>
                  <div className="timeline-line"></div>
                </div>

                <div className="quest-main">
                  <div className="quest-info">
                    <h3>
                      {quest.title}{" "}
                      {!quest.unlocked && <i className="fa-solid fa-lock"></i>}
                    </h3>
                    <span className="count">
                      {quest.problems.length} Problems
                    </span>
                  </div>

                  {quest.unlocked && (
                    <div className="problem-list">
                      {quest.problems.map((prob) => (
                        <div key={prob.id} className="problem-item">
                          <div className="prob-left">
                            <i
                              className={`fa-solid ${prob.status === "solved" ? "fa-circle-check solved" : "fa-circle todo"}`}
                            ></i>
                            <span className="prob-name">{prob.name}</span>
                          </div>
                          <span
                            className={`difficulty ${prob.difficulty.toLowerCase()}`}
                          >
                            {prob.difficulty}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="challenges-sidebar">
          <QuestSidebar />
        </aside>
      </div>
    </div>
  );
}
