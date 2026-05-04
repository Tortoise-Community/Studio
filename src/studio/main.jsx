import React, { useState } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import ProblemDescription from "./components/ProblemDescription";
import CodeEditor from "./components/CodeEditor";
import TestConsole from "./components/TestConsole";
import Header from "./components/Header";
import "./styles/main.scss";
import Footer from "./Footer";

export default function Main() {
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState(null);
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const mockProblem = {
    title: "1. Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    example: "Input: nums = [2,7,11,15], target = 9 \nOutput: [0,1]",
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
  };

  async function handleExecute(code) {
    setIsRunning(true);
    setError("");
    setOutput(null);
    try {
      const EXEC_API = import.meta.env.VITE_EXECUTE_API;
      const res = await fetch(EXEC_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code }),
      });
      const data = await res.json();
      if (data.code === 0) setOutput(data.test_results || data.output);
      else setError(data.std_log || "Error executing code");
    } catch (err) {
      setError("Execution engine offline.");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="leetcode-container">
      <main className="main-workspace">
        <Group orientation="horizontal">
          <Panel defaultSize={40} minSize={20}>
            <div className="panel-inner problem-pane-wrapper">
              <ProblemDescription problem={mockProblem} />
            </div>
          </Panel>

          <Separator className="resizer-v" />

          <Panel defaultSize={60}>
            <Group orientation="vertical">
              <Panel defaultSize={60} minSize={30}>
                <div className="panel-inner">
                  <CodeEditor
                    language={language}
                    setLanguage={setLanguage}
                    onExecute={handleExecute}
                    isRunning={isRunning}
                  />
                </div>
              </Panel>

              <Separator className="resizer-h" />

              <Panel defaultSize={40} minSize={15}>
                <div className="panel-inner">
                  <TestConsole
                    isRunning={isRunning}
                    results={output}
                    error={error}
                  />
                </div>
              </Panel>
            </Group>
          </Panel>
        </Group>
      </main>
    </div>
  );
}
