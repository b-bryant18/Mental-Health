import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import GoodNews from './pages/News';
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
// import Footer from "./components/Footer";
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/news" component={GoodNews} />
          <Route exact path="/cardio" component={Cardio} />
          <Route exact path="/strength" component={Strength} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
