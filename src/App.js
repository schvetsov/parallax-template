import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import headshot from './headshot.jpg';
import './App.css';

function App(props) {

  return (
    <div >

    <ul>
      <li><a className="active" href="#home">Gallery</a></li>
      <li><a href="#news">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">Pricing</a></li>
      <div className={"title"}>Beach Bum Beauty</div>
    </ul>

    <div className="parallax"></div>

<div style={{height:'400px', backgroundColor:'white', fontSize:'36px'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>

<div className="parallax"></div>

    {/* <div className={"contact-container"}>
      <div className={"contact"}>
      Phone: 904-352-0932
      </div>
      <div className={"contact"}>
      Email: beachbumbeauty904@gmail.com
      </div>
      </div> */}
      {/* <Navbar bg="light" variant="light"> */}
        
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        {/* <div style={{border: "1px solid black", width: "100%", display: "flex", justifyContent: "left"}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          P: 904-352-0932, E: beachbumbeauty904@gmail.com
        </div>
      </Navbar> */}

      {/* <div className={"title"}>
        Beach Bum Beauty
      </div>

      <div className={"headshot"}>
        <img src={headshot} alt="image1" style={{width: 200}} />
      </div> */}

      <div>
        
      </div>

    </div>
  );
}
export default App;
