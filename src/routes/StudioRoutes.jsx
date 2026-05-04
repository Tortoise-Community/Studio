import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../studio/main";
import Dashboard from "../studio/Dash";
import Login from "../studio/Login";
import Settings from "../studio/Settings";
import Challenges from "../studio/Challenge";

import React, { useState } from "react";
import Header from "../studio/components/Header";
import Sidebar from "../studio/Sidebar";
import Footer from "../studio/Footer";

export default function StudioRoutes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route>
          <div className="studio-app-wrapper">
            <Header onMenuClick={toggleSidebar} />

            <div className="studio-body">
              <Sidebar isOpen={isOpen} onClose={closeSidebar} />

              {isOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar} />
              )}

              <main className="studio-content">
                <Switch>
                  <Route exact path="/challenges" component={Challenges} />
                  <Route exact path="/dash" component={Dashboard} />
                  <Route exact path="/problems" component={Main} />
                  <Route exact path="/settings" component={Settings} />
                </Switch>
              </main>
            </div>

            <Footer />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
