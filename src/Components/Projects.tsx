import React from "react";
import ProjectsData from "../Data/Projects.json";
import LaunchIcon from "@mui/icons-material/Launch";

const Chip = (props: { text: string }) => {
  return <div className="chip">{props.text}</div>;
};
const Projects = () => {
  return (
    // <div className="experience" id="experience">
    //     <h1>Experiences</h1>
    //   {ExperienceData.map((item, ind) => {
    //     return (
    //       <div key={`${item.companyName}-${ind}`} className="">
    //         <h3 className="summaryHeading">
    //           {item.companyName} <span className="experienceDuration" style={{fontSize: "small"}}>{item.duration}</span>{" "}
    //           {item.link && (
    //             <a href={item.link} target="_blank">
    //                 <LaunchIcon  sx={{color: '#3ee6ef'}}/>
    //             </a>
    //           )}
    //         </h3>
    //         <p>{item.location}</p>
    //         {item.experiences.map((ele, index) => {
    //           return (
    //             <div key={`${ele.designation}-${item.companyName}-${index}`} className="subExperience">
    //               <h3 className="summaryHeading">{ele.designation}</h3>
    //               <p className="experienceDuration">{ele.duration}</p>
    //               <article>
    //                 <ul>
    //                   {ele.description.map(desc => <li>{desc}</li>)}
    //                 </ul>
    //               </article>
    //               <div className="skillsWrapper">
    //                 {Array.isArray(ele.skills) &&
    //                   ele.skills.map((skill, rank) => {
    //                     return <Chip text={skill} key={rank} />;
    //                   })}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="projects">
      <h1>Projects</h1>
      {ProjectsData.map((project) => {
        return (
          <div className="summary" id="">
            <h1 className="summaryHeading " style={{ fontSize: "24px" }}>
              {project.projectName}
            </h1>
            <div className="linksWrapper">
              <a className="experienceDuration projectLink "   target="_blank" href={project.githubLink}>Github Link</a>
              <a className="experienceDuration projectLink " target="_blank" href={project.liveLink}>Live Link</a>
            </div>
            <article style={{ paddingRight: "20px" }}>
              <ul>
                {project.description.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </article>
            <div className="skillsWrapper">
              {project.skills.map((skill, rank) => (
                <Chip text={skill} key={rank} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
