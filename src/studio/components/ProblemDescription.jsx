import React from "react";
import "./styles/ProblemDescription.scss";

export default function ProblemDescription({ problem }) {
  return (
    <div className="problem-description">
      <div className="problem-header">
        <h2>{problem.title}</h2>
        <span
          className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}
        >
          {problem.difficulty}
        </span>
      </div>
      <div className="problem-content">
        <p>{problem.description}</p>
        <h3>Example:</h3>
        <pre className="example-block">
          <code>{problem.example}</code>
        </pre>
        <h3>Constraints:</h3>
        <ul>
          {problem.constraints.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
