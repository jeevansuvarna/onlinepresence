import "./App.css";
import { SideBar } from "./Components/SideBar";
import { Intro } from "./Components/Intro";
import { Cube } from "./Components/Cube";
import { About } from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="App">
                <SideBar title="house" />
                <Intro />
                <Cube />
              </div>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
