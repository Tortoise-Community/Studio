import React, { useEffect, useRef } from "react";
import "./styles/CodeEditor.scss";

const LANGUAGES = [
  { label: "Python", value: "python", icon: "fa-python", ext: "py" },
  { label: "JavaScript", value: "javascript", icon: "fa-js", ext: "js" },
  { label: "Java", value: "java", icon: "fa-java", ext: "java" },
];

export default function CodeEditor({
  language,
  setLanguage,
  onExecute,
  isRunning,
}) {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  const currentLangConfig =
    LANGUAGES.find((l) => l.value === language) || LANGUAGES[0];

  useEffect(() => {
    const loader = window.require;
    if (!loader || !containerRef.current) return;

    loader.config({
      paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" },
    });

    loader(["vs/editor/editor.main"], () => {
      const editor = window.monaco.editor.create(containerRef.current, {
        value: "",
        language,
        theme: "vs-dark",
        fontSize: 14,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontFamily: "'JetBrains Mono', monospace",
        lineNumbers: "on",
        renderLineHighlight: "all",
        padding: { top: 15 },
      });
      editorRef.current = editor;
    });

    return () => editorRef.current?.dispose();
  }, []);

  useEffect(() => {
    if (editorRef.current && window.monaco) {
      const model = editorRef.current.getModel();
      window.monaco.editor.setModelLanguage(model, language);
    }
  }, [language]);

  return (
    <div className="editor-window">
      <div className="window-header">
        <div className="header-left">
          <div className="lang-selector-wrapper">
            <i className={`fa-brands ${currentLangConfig.icon} lang-icon`}></i>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ghost-select"
            >
              {LANGUAGES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="header-right">
          <button
            className="run-action-btn"
            onClick={() => onExecute(editorRef.current.getValue())}
            disabled={isRunning}
          >
            {isRunning ? (
              <span className="spinner-border spinner-border-sm" />
            ) : (
              <>
                <i className="fas fa-play"></i> <span>Run</span>
              </>
            )}
          </button>
          <button
            className="run-action-btn submit"
            onClick={() => onExecute(editorRef.current.getValue())}
            disabled={isRunning}
          >
            {isRunning ? (
              <span className="spinner-border spinner-border-sm" />
            ) : (
              <>
                <i className="fas fa-cloud-arrow-up"></i> <span>Submit</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div ref={containerRef} className="monaco-container" />
    </div>
  );
}
