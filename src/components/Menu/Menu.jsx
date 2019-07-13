import React from 'react';
import { push as Menu } from 'react-burger-menu'

class BurguerMenu extends React.Component {
    render () {
        return (
            <div id="outer-container">
            <Menu id={"slide"} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
            <main id="page-wrap">
                <h1><a href="https://github.com/negomi/react-burger-menu">react-burger-menu</a></h1>
                <a>Left</a>
                <a>Right</a>
                <h2 className="description">An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.</h2>
                Inspired by <a href="https://github.com/codrops/OffCanvasMenuEffects">Off-Canvas Menu Effects</a> and <a href="https://github.com/codrops/SidebarTransitions">Sidebar Transitions</a> by Codrops
            </main>
            </div>
      );
    }
  }

  export default BurguerMenu;