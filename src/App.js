import React from 'react';
import './App.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import { Parallax } from 'react-parallax';
import Menu from './components/Menu/Menu';
import Page1 from './components/Pages/Page1/Page1';
import Page2 from './components/Pages/Page2/Page2';

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
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 0) {
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
        >
          <Menu scrollingLock />
        </Parallax>

        <Page1/>

        <Parallax
          blur={0}
          bgImage={image2}
          bgImageAlt="the cat"
          strength={200}
        >
          <div style={{ height: '100vh' }}></div>
        </Parallax>

        <Page2/>

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
