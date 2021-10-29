import "./App.css";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Membership from "./components/Membership/Membership.jsx";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact2";
import About from "./components/About/About";
import EventPage from "./components/Events/components/EventPage";

import ScrollToTop from "./components/ScrollToTop";

import linker from "./components/GlobalVars";

function App() {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Navbar />
          <ScrollToTop>
            <Route path={`${linker}`} exact component={Dashboard} />
            <Switch>
              <Route path={`${linker}Home`} exact component={Dashboard} />
              <Route path={`${linker}Events`} exact component={Events} />
              <Route
                path={`${linker}Membership`}
                exact
                component={Membership}
              />
              <Route path={`${linker}Team`} exact component={Team} />
              <Route path={`${linker}Contact`} exact component={Contact} />
              <Route path={`${linker}About`} exact component={About} />
              <Route path={`${linker}Events/:id`} exact component={EventPage} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
