import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import ConnectWithMe from "./Components/ConnectWithMe";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      className="app"
      onMouseMove={handleMouseMove}
      style={{
        // backgroundImage: `radial-gradient(circle at ${mousePosition?.x}px ${mousePosition?.y}px,rgb( 18 32 69 / 80%) 5vw, rgb(15 23 42) 40vw)`,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A192F",
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,
                          rgba(18, 32, 69, 0.8) 2vw,
                          rgba(18, 32, 69, 0.7) 4vw,
                          rgba(18, 32, 69, 0.6) 6vw,
                          rgba(18, 32, 69, 0.5) 8vw,
                          rgba(18, 32, 69, 0.4) 12vw,
                          rgba(18, 32, 69, 0.4) 15vw,
                          rgba(18, 32, 69, 0.4) 18vw,
                          rgba(10, 25, 47, 1) 30vw)`,
      }}
    >
      <div className="left">
        <Header />
        <div className="toggleHide">
          <LeftPanel />
          <ConnectWithMe />
        </div>
      </div>
      <div className="right">
        <RightPanel />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
