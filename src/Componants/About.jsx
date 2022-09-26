import React from 'react';
import Common from './Common';
import dev from './istockphoto-1370235115-1024x1024.jpg';

const About = () => {

  return (<>
    <Common name="Welcome to About Page" imgsrc={dev} visit='/contact' btn='Contact Now' />
  </>
  );
}
export default About;
