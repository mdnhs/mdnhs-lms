// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import Courses from "./Component/Courses.js/Courses";
import About from "./Component/About/About";
import Contactus from "./Component/Contact/Contactus";

function App() {
  return (
    <div className="App">
      {/* Router Start  */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contactus></Contactus>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* Footer Part  */}
      <footer className="text-light mt-5" style={{ background: "#2196F3" }}>
        <p className="p-3 mb-0">
          copyright © 2021 all rights reserved<br />By MDNHS.
        </p>
      </footer>
    </div>
  );
}

export default App;
