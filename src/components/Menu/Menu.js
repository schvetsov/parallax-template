import React from 'react';
import './Menu.css';

const Menu = props => {
  const { scrollingLock } = props;
    return(
    <div style={{ height: '100vh' }}>
        <div 
          className="header" 
          style={{position: scrollingLock ? "fixed" : "relative"}}>
          <div className="menu">
            <a href="#gallery">Menu1</a>
            <a href="#services">Menu2</a>
            <a href="#contact">Menu3</a>
            <a href="#about">Menu4</a>
          </div>
          <div></div>
          <div className="title">Title</div>
        </div>
      </div>
    )
}

export default Menu;
