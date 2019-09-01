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
import ScrollButton from './ScrollButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {

  if (window.scrollY > 0) {
    console.log("should lock");
    this.setState({
      scrollingLock: true
    });
  } else if (window.scrollY < 0) {
    console.log("not locked" );
    this.setState({
      scrollingLock: false
    });
  }

}

render() {

  return (
    <div >



      <Parallax
        blur={0}
        bgImage={image1}
        bgImageAlt="the cat"
        strength={200}
        // style={{ marginTop: '-76px'}}
      >
        {/* <Background className="custom-bg"> */}
        <div style={{ height: '100vh' }}>

            <div className="header" style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>

                <div className="menu">
                  <div className="menu-item"><a href="#gallery">Gallery</a></div>
                  <div className="menu-item"><a href="#services">Services</a></div>
                  <div className="menu-item"><a href="#contact">Contact</a></div>
                  <div className="menu-item"><a href="#about">Pricing</a></div>
                </div>
                <div className="title">Beach Bum Beauty</div>

          </div>
        
        </div>
      </Parallax>

      {/* <ScrollButton scrollStepInPx="100" delayInMs="0"/> */}

      {/* <div className="parallax1"></div> */}

      <div 
        id="gallery">
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

            <Parallax
        blur={0}
        bgImage={image2}
        bgImageAlt="the cat"
        strength={200}
      >
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
      </Parallax>

      {/* <div className="parallax2"></div> */}

      <div 
        id="services">
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

            <Parallax
        blur={0}
        bgImage={image3}
        bgImageAlt="the cat"
        strength={200}
      >
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
      </Parallax>

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
}

export default App;
