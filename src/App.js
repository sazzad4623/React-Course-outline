import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Item from "./components/Item";

//import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />

        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/content" component={Content}></Route>
          <Route path="/item" component={Item}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
