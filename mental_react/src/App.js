import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Wrapper>
          <Route path ="/" component ={Home} />
          <Route path = "/home" component = {Home} />
          <Route path = "/workout" component = {Workout} />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
