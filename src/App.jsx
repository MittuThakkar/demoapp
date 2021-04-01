import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import BasicForm from "./component/BasicForm";
// import UseEffects1 from "./component/forms/useEffect/useEffects1";
// import UseEffects2 from "./component/forms/useEffect/useEffects2";
// import UseEffectAPI from "./component/forms/useEffect/useEffectAPI"
import Home from "./component/forms/useEffect/Home";
import Login from "./component/forms/useEffect/Login";
import Dashboard from "./component/forms/useEffect/Dashboard";

import "./index.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="acion" to="/">Home</NavLink>
          <NavLink activeClassName="acion" to="/login">Login</NavLink> 
          <NavLink activeClassName="acion" to="/dashboard">Dashboard</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
