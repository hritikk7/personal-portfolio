import React from "react";

const LeftPanel = () => {
  const Items = ["Overview", "Experiences & Skills", "Projects", "Resume"];
  const ids = ["summary", "experience", "projects", "downloadButton"];
  const [selected, setSelected] = React.useState(0);
  const handleScroll = (index: number) => {
    const ele = document.getElementById(ids[index]);
    ele && ele.scrollIntoView({ behavior: "smooth" });
    setSelected(index);
  };
  return (
    <div className="navLinksContainer">
      {Items.map((item, ind) => (
        <p
          className={`navLinks ${selected === ind && "selected"}`}
          key={`${item}-${ind}`}
          onClick={() => handleScroll(ind)}
        >
          <span />
          ------- {item}
        </p>
      ))}
    </div>
  );
};

export default LeftPanel;
