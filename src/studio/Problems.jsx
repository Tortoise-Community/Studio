import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import "./styles/Problems.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";

const MOCK_PROBLEMS = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  title: [
    "Two Sum",
    "Add Two Numbers",
    "Longest Substring",
    "Median of Two Sorted Arrays",
    "Longest Palindromic Substring",
    "ZigZag Conversion",
    "Reverse Integer",
    "Two Sum II",
  ][i % 8],
  difficulty: ["Easy", "Medium", "Hard"][i % 3],
  status: ["Solved", "Todo", "Attempted"][i % 3],
  acceptance: (Math.random() * 50 + 35).toFixed(1) + "%",
}));

export default function Problems() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = useMemo(() => {
    return MOCK_PROBLEMS.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchDiff = difficulty === "All" || p.difficulty === difficulty;
      const matchStatus = status === "All" || p.status === status;
      return matchSearch && matchDiff && matchStatus;
    });
  }, [search, difficulty, status]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayData = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div className="dashboard-page">
      <main className="dashboard-grid">
        <section className="main-content">
          <div className="stats-row">
            <div className="stat-mini-card">
              <span className="label">Solved</span>
              <span className="value easy">124</span>
            </div>
            <div className="stat-mini-card">
              <span className="label">Easy</span>
              <span className="value easy">45</span>
            </div>
            <div className="stat-mini-card">
              <span className="label">Med.</span>
              <span className="value medium">67</span>
            </div>
            <div className="stat-mini-card">
              <span className="label">Hard</span>
              <span className="value hard">12</span>
            </div>
          </div>

          <div className="controls-row">
            <select
              className="difficulty-select"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
            >
              <option value="All">All Status</option>
              <option value="Todo">Not Solved</option>
              <option value="Attempted">Attempted</option>
              <option value="Solved">Solved</option>
            </select>
            <div className="search-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <select
              className="difficulty-select"
              value={difficulty}
              onChange={(e) => {
                setDifficulty(e.target.value);
                setPage(1);
              }}
            >
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="table-container">
            <table className="problem-table">
              <thead>
                <tr>
                  <th className="status-col">Status</th>
                  <th>Title</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((p) => (
                  <tr key={p.id}>
                    <td className="status-col">
                      {p.status === "Solved" && (
                        <i className="fa-solid fa-check-circle solved-icon"></i>
                      )}
                      {p.status === "Attempted" && (
                        <i className="fa-solid fa-clock-rotate-left attempted-icon"></i>
                      )}
                    </td>
                    <td className="title-col">
                      <Link to="/solve">
                        <span className="p-link">{p.title}</span>
                      </Link>
                    </td>
                    <td className={`diff-col ${p.difficulty.toLowerCase()}`}>
                      {p.difficulty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-footer">
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <span className="page-text">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </section>

        <aside className="sidebar-area">
          <div className="sidebar-placeholder">
            <h3>Leaderboard</h3>
            <div className="placeholder-card">List Content Here</div>
          </div>
        </aside>
      </main>
    </div>
  );
}
