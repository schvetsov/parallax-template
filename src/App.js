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
          // style={{marginTop: -76}}
        >
          <div style={{ height: '100vh' }}>
            <div className="header" style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
              <div className="menu">
                <a href="#gallery">Gallery</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="#about">Pricing</a>
              </div>
              <div></div>
              <div className="title">Beach Bum Beauty</div>
            </div>
          </div>
        </Parallax>

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
          <div style={{ height: '100vh' }}>

          </div>
        </Parallax>

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
          <div style={{ height: '100vh' }}></div>
        </Parallax>

      </div>
    );
  }
}

export default App;
