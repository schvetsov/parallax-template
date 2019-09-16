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
            <a href="#page1">Menu1</a>
            <a href="#page2">Menu2</a>
          </div>
          <div></div>
          <div className="title">Title</div>
        </div>
      </div>
    )
}

export default Menu;
