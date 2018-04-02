import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Topics from "./Topics";
import User from "./user";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <hr />
 		<Switch>
	      <Route exact path="/" component={Home} />
	      <Route path="/about" component={About} />
	      <Route path="/topics" component={Topics} />
	      <Route path="/user" component= {User} />
	      <Route path="/Contact" component= {Contact} />
 		</Switch>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

export default BasicExample;