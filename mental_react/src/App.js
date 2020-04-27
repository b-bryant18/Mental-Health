import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
import Footer from "./components/Footer";
import Navigation from './components/Navbar';
import './App.css';
import GoodNews from './pages/News';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Header />
        <Wrapper>
          <Route path ="/" component ={Home} />
          <Route path = "/home" component = {Home} />
          <Route path = "/cardio" component = {Cardio} />
          <Route path = "/strength" component = {Strength} />
          <Route path = "/news" component = {GoodNews} />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
