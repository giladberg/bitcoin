import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ContactDetailsPage from './pages/ContactDetailsPage.jsx'
import ContactEditPage from './pages/ContactEditPage.jsx'
import Header from './cmps/header/Header.jsx'

function App() {
  return (
    <div >
      <Router >
      <Header/>
        <Switch>
          <Route component={HomePage} path="/" exact></Route>
          <Route path="/contact" exact render={()=><ContactPage/ >} ></Route>
          <Route component={ContactEditPage} path="/contact/edit/:id?" exact></Route>
          <Route component={ContactDetailsPage} path="/contact/:id" exact></Route>
          <Route component={NotFoundPage} path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
