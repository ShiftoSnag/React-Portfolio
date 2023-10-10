import React from 'react';
import '../../styles/aboutStyles.css';
import '../../styles/pageStyles.css'

export default function About() {
  return (
    <div className='page-container custom-scrollbar'>
      <h2 className='page-title'>About Me -Ryan</h2>
      <img src="./assets/pngegg.png" alt="This is not actually me. It is just a simple icon, but I wish I looked this good." className="about-image" />
      <p className='about-content'>
        I Currently am living in Herriman UT, Currently I work full time at a local company called Integrated Engineering, We speacialize in Automotive Parts and Hardware, At the time of this Site I am Currently attending a 
        bootcamp through the U of U here in Utah
         <br />
        <br />
        So far the class has been great and ive learned so much for Front & Back end coding for specific Apps!
        <br />
      </p>
    </div>
  );
}
