import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ConnectWithMe = () => {
  return (
    <div className="connectWrapper">
      <h3>Connect with me</h3>
      <div className="connect">
        <a href="mailto:kumarhritik158@gmail.com?subject=Hi%20Ritik&body=Body%20Text%20Here">
          <EmailIcon className="icons" />
        </a>
        <a href="https://github.com/hritikk7" target="_blank">
          <GitHubIcon className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/ritik0206/" target="_blank">
          <LinkedInIcon className="icons" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
