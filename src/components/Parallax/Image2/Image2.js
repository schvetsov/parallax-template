import React from 'react';
import image2 from '../../../images/image2.jpeg';
import { Parallax } from 'react-parallax';

const Image2 = () => {
  return(
    <Parallax
      blur={0}
      bgImage={image2}
      bgImageAlt="puppy2"
      strength={200}
    >
      <div style={{ height: '100vh' }}></div>
    </Parallax>
  )
}

export default Image2;
