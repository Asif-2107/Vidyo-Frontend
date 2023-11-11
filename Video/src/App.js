import React from "react";
import Videoplayer from "./Videoplayer";
import VideoMetadata from "./VideoMetadata";

const App = () => {
  const appStyle = {
    backgroundColor: "orange", // Set the background color to pink
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const headingStyle = {
    marginBottom: "20px",
  };

  return (
    <div style={appStyle}>
      <h1 style={headingStyle}>Videoplayer</h1>
      <Videoplayer />
      <VideoMetadata /> {/* Use the correct component name here */}
    </div>
  );
};

export default App;

