import React from 'react';
import image3 from '../../../images/image3.jpeg';
import { Parallax } from 'react-parallax';

const Image3 = () => {
  return(
    <Parallax
      blur={0}
      bgImage={image3}
      bgImageAlt="puppy3"
      strength={200}
    >
      <div style={{ height: '100vh' }}></div>
    </Parallax>
  )
}

export default Image3;
