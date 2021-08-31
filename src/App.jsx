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
import { withAuth0 } from '@auth0/auth0-react';
import Main from './components/Main';
import Favourit from "./components/Favourit";
import Navigation2 from './components/Navigation2';
import Navigation3 from './components/Navigation3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header3 from "./components/Header3";

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
          <Navigation2 />
          <Main/>
          </Route>

          <Route path='/fav'>
          <Navigation3 />
          <Header3 />
         <Favourit />
          </Route>
        </Switch>
      
      </Router>

    </div>
  );
};

export default App;
