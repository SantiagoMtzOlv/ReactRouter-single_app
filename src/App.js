import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from "./components/User";
function App() {
  return (
    <Router>
        <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark ml-2" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/contacto" className="btn btn-dark ml-2" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink to="/nosotros" className="btn btn-dark ml-2" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr/>
        <Switch>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros" exact>
            <Nosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
