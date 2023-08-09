08 May 2023 
from 
https://stackoverflow.com/questions/69338524/navlink-is-not-defined-in-react-js
 Visit the page and remove the error

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './components/Home';
import Services from './components/Services';
import Plans from './components/Plans';


import Navigation from './Navigation';

import Contact from './App2';

import reportWebVitals from './reportWebVitals';
// import browserHistory  from 'react-router';
import {IndexRoute,browserHistory} from 'react-router';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { NavLink } from 'react-router-dom';



ReactDOM.render(
    <div>
        <Router>
        <div>
        
         <NavLink to="/">Home</NavLink>
          
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Sercices</NavLink>
          <NavLink to="/plans">Plans</NavLink>
        <Switch>
         <Route path="/" component={Home} exact/>
         
         <Route path="/contact" component={Contact}/>
         <Route path="/plans" component={Plans}/>
         <Route path="/services" component={Services}/>

        <Route component={Error}/>
       </Switch>
         </div> 
        </Router>

    </div>
  ,
  document.getElementById('roots')
);