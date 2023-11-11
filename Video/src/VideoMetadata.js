import React, { useEffect, useRef } from 'react';

const VideoMetadata = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Define video metadata
    const metadata = {
      Title: "Sample Video",
      description: "This is a sample video with metadata.",
      duration: "10s",
      resolution: "1920x1080",
      codec: "H.264",
      bitrate: "5000 kbps",
      frameRate: "30 fps",
      aspectRatio: "1.78",
      creationDate: "2023-11-10",
      author: "John Doe",
      location: "Unknown",
      thumbnail: "path/to/thumbnail.jpg",
      language: "English",
      closedCaptions: true,
      subtitles: false
    };

    // Draw metadata on the canvas
    ctx.fillStyle = 'black';
    ctx.font = '14px Times New Roman';
    let y = 20;

    for (const key in metadata) {
      const text = `${key}: ${metadata[key]}`;
      ctx.fillText(text, 10, y);
      y += 20;
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="metadataCanvas"
        width="400"
        height="350"
        style={{ border: '10px solid #ccc', backgroundColor: 'yellow', marginBottom: '500px', marginLeft: '1000px', marginTop: '-400px' }}
      ></canvas>
    </div>
  );
};

export default VideoMetadata;
