import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import headshot from './headshot.jpg';
import './App.css';
import image1 from './image/image1.JPG';
import image2 from './image/image2.JPG';
import image3 from './image/image3.JPG';
import { Parallax, Background } from 'react-parallax';
// import { url } from 'inspector';

function App(props) {

  return (
    <div >

      {/* <ul>
        <li><a className="active" href="#home">Gallery</a></li>
        <li><a href="#news">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">Pricing</a></li>
        <div className={"title"}>Beach Bum Beauty</div>
      </ul> */}

      <Parallax
        blur={0}
        bgImage={image1}
        bgImageAlt="the cat"
        strength={200}
      >
        Text<br/><br/><br/><br/><br/><br/><br/><br/><br/>
        abouta
        abouta
        abouta
        a
      </Parallax>

      {/* <div className="parallax1"></div> */}

      <div style={{height:'400px', backgroundColor:'white', fontSize:'36px'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

      {/* <div className="parallax2"></div> */}

      <div style={{height:'400px', backgroundColor:'white', fontSize:'36px'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

      {/* <div className="parallax3"></div> */}

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
