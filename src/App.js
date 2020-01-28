import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import ContactDetailsPage from './pages/ContactDetailsPage.jsx'
import ContactEditPage from './pages/ContactEditPage.jsx'
import Header from './cmps/header/Header.jsx'

function App() {
  return (
    <div >
      <Router >
      <Header/>
        <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={ContactDetailsPage} path="/contact/:id" exact></Route>
          <Route component={ContactPage} path="/contact" exact></Route>
          <Route component={ContactEditPage} path="/contact/edit/:id" exact></Route>
          <Route component={NotFound} path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
