import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import thum from './img/fECl4sfpWR.png';
import introVideo from './video/sample.mp4';

const Videoplayer = () => {
  return (
    <div style={{ 
      marginRight: '500px', 
      marginLeft: '200px', 
      marginTop: '50px', 
      border: '10px solid #ccc', // Add border style
      padding: '10px' // Optional: Add padding for better appearance
    }}>
      <Video
        autoPlay
        loop
        poster={thum}
        onCanPlayThrough={() => {
          console.log('video play');
        }}
      >
        <source src={introVideo} type="video/mp4" />
      </Video>
    </div>
  );
};

export default Videoplayer;
