import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { PortFolio } from "../components/PortFolio";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";
import TemporaryDrawer from '../components/ButtomOption';

export function AppRouter() {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };


  return (
    <Router>
        <div>
            <Navbar toggleDrawer={toggleDrawer}/>
            <TemporaryDrawer toggleDrawer={toggleDrawer} state={state}/>
            <Switch>
                <Route exact path="/" component={PortFolio} />
                <Route path="/resumen" component={Resume} />
                <Route path="/sobremi" component={AboutMe} />
                <Route path="/proyectos" component={Projects} />
                <Route path="/contacto" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
  );
}