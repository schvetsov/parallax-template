import React , { useState, useEffect } from 'react';
import './App.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import { Parallax } from 'react-parallax';
import Menu from './components/Menu/Menu';
import Page1 from './components/Pages/Page1/Page1';
import Page2 from './components/Pages/Page2/Page2';

const App = () => {

  const [scrollingLock, setScrollingLock] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollingLock(true);
    } else if (window.scrollY < 0) {
      setScrollingLock(false);
    }
  }

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

export default App;
