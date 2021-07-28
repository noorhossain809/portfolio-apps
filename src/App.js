import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavMenu from './components/NavMenu/NavMenu';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
