import React from 'react';
import { Router, Link } from "@reach/router"
import {Location, Home} from './views'
import { push as Menu } from 'react-burger-menu'

const burguerMenuStyles={
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    height: 'unset'
  },
  bmItem: {
    display: 'inline-block',
    textAlign: 'center',
    color: 'white'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

function App() {
  return (
      <div id="outer-container">
        <Menu
          id={"slide"}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          styles={ burguerMenuStyles }
        >
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/location" className="menu-item">Location</Link>
            <Link to="/register" className="menu-item">Register</Link>
        </Menu>
        <main id="page-wrap">
          <Router>
            <Home path="/"/>
            <Location path="/location"/>
          </Router>
        </main>
      </div>
  );
}

export default (App);
