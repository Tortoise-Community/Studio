import React, { useState } from "react";
import "./styles/TestConsole.scss";

export default function TestConsole({ isRunning, results, error }) {
  const [activeTab, setActiveTab] = useState("result");
  const [selectedCase, setSelectedCase] = useState(0);

  const testResults = results || [
    {
      status: "Accepted",
      input: "[2,7,11,15]\n9",
      output: "[0,1]",
      expected: "[0,1]",
      stdout: "Checking index 0...",
    },
    {
      status: "Wrong Answer",
      input: "[3,2,4]\n6",
      output: "[1,1]",
      expected: "[1,2]",
      stdout: "",
    },
  ];

  return (
    <div className="test-console">
      <div className="console-tabs">
        {/* <button
          className={`tab-btn ${activeTab === "testcase" ? "active" : ""}`}
          onClick={() => setActiveTab("testcase")}
        >
          Testcase
        </button> */}
        <button
          className={`tab-btn ${activeTab === "result" ? "active" : ""}`}
          onClick={() => setActiveTab("result")}
        >
          Result {isRunning && <span className="pulse"></span>}
        </button>
      </div>

      <div className="console-content">
        {activeTab === "result" ? (
          error ? (
            <div className="error-view">{error}</div>
          ) : (
            <div className="results-wrapper">
              <div className="case-selector">
                {testResults.map((res, idx) => (
                  <button
                    key={idx}
                    className={`case-btn ${selectedCase === idx ? "active" : ""} ${res.status.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setSelectedCase(idx)}
                  >
                    Case {idx + 1}
                  </button>
                ))}
              </div>

              <div className="case-details">
                <h4
                  className={
                    testResults[selectedCase].status === "Accepted"
                      ? "success"
                      : "fail"
                  }
                >
                  {testResults[selectedCase].status}
                </h4>

                <div className="data-group">
                  <label>Input</label>
                  <pre>{testResults[selectedCase].input}</pre>
                </div>
                <div className="data-group">
                  <label>Output</label>
                  <pre>{testResults[selectedCase].output}</pre>
                </div>
                <div className="data-group">
                  <label>Expected</label>
                  <pre>{testResults[selectedCase].expected}</pre>
                </div>

                {/* {testResults[selectedCase].stdout && (
                  <div className="data-group stdout">
                    <label>Standard Output</label>
                    <pre>{testResults[selectedCase].stdout}</pre>
                  </div>
                )} */}
              </div>
            </div>
          )
        ) : (
          <div className="testcase-view">
            <div className="data-group">
              <label>nums =</label>
              <pre>[2,7,11,15]</pre>
              <label>target =</label>
              <pre>9</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
