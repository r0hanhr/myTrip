import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import HomeComponent from "./components/homeComponent/HomeComponent";
import ContactusComponent from "./components/contactusComponent/ContactusComponent";
import PackagesComponent from "./components/packagesComponent/PackagesComponent";
import LoginComponent from "./components/loginComponent/LoginComponent";
import RegistrationComponent from "./components/registrationComponent/RegistrationComponent";

function App() {
  return (
    <>
      <Router>
        <header>
          <HeaderComponent />
        </header>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/contactus" exact component={ContactusComponent} />
          <Route path="/package" exact component={PackagesComponent} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/register" exact component={RegistrationComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
