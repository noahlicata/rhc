import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyStory from "./components/MyStory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mystory">
            <MyStory />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
