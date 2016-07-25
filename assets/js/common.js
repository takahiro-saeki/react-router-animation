import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from './container/Main';
import Page1 from './container/Page1';
import Page2 from './container/Page2';
import Page3 from './container/Page3';
import STYLE from '../css/style.css';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/page1' component={Page1} />
    <Route path='/page2' component={Page2} />
    <Route path='/page3' component={Page3} />
  </Router>,
  document.getElementById('app')
)
