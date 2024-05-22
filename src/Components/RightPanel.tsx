import React from "react";
import Summary from "./Summary";
import Experiences from "./Experiences";
import ResumeDownload from "./ResumeDownload";
import ConnectWithMe from "./ConnectWithMe";
import Projects from "./Projects";

const RightPanel = () => {
  return (
    <div className="rightPanel">
      <Summary />
      <Experiences />
      <Projects />
      <ResumeDownload />
      <div className="contactMe">
        <ConnectWithMe />
      </div>
    </div>
  );
};

export default RightPanel;
