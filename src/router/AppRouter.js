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
                <Route exact path="./resumen" component={Resume} />
                <Route exact path="/sobremi" component={AboutMe} />
                <Route exact path="/proyectos" component={Projects} />
                <Route exact path="/contacto" component={Contact} />
                <Route path="/" component={PortFolio} />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
  );
}