import React , { useState, useEffect } from 'react';
import './App.css';
import Image1 from './components/Parallax/Image1/Image1';
import Image2 from './components/Parallax/Image2/Image2';
import Image3 from './components/Parallax/Image3/Image3';
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
    <>
      <Image1 scrollingLock={scrollingLock} />
      <Page1/>
      <Image2/>
      <Page2/>
      <Image3/>
    </>
  );
}

export default App;
