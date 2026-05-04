import React, { useEffect, useState } from "react";
import "./styles/Footer.scss";

export default function Footer() {
  const STATUS = {
    UP: "System Operational",
    DOWN: "Service Down",
    CHECKING: "Performing Checks",
  };

  const currentYear = new Date().getFullYear();
  const EXEC_API = ""; //import.meta.env.VITE_EXECUTE_API.replace(/execute\/?$/, "");
  const [status, setStatus] = useState(STATUS.CHECKING);

  async function checkAPIStatus() {
    try {
      const res = await fetch(EXEC_API, { method: "GET" });
      setStatus(res.ok ? STATUS.UP : STATUS.DOWN);
    } catch (err) {
      setStatus(STATUS.DOWN);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => checkAPIStatus(), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="studio-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="copyright">
            © {currentYear}
            <a href="https://tortoisecommunity.org" className="brand-link">
              &nbsp;Tortoise Community
            </a>
          </span>
          <span className="divider">|</span>
          <span className="tagline">An open-source initiative</span>
        </div>

        <div className="footer-right">
          <div className="api-status">
            <span
              className={`dot ${status === STATUS.UP ? "up" : status === STATUS.DOWN ? "down" : "checking"}`}
            ></span>
            <span className="status-text">{status}</span>
          </div>
          <span className="divider">|</span>
          Powered by
          <a
            href="https://github.com/Ryuga/Hermes"
            target="_blank"
            rel="noreferrer"
            className="engine-link"
          >
            <span className="engine-name">&nbsp; Hermes Engine</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
