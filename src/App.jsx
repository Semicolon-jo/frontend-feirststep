import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Profile from './components/Profile';
import Login from './components/Login';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const { user, isAuthenticated } = withAuth0();

  return (
    <div>

      <Router>

        <Switch>
          <Route exact path="/">

            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />

          </Route>
          
          <Route path='/profile'>
          <Navigation />
          <Main/>
          </Route>
        </Switch>
        {/* {isAuthenticated && <Redirect to='/profile' />} */}

      </Router>

    </div>
  );
};

export default App;
