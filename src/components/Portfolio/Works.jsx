import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "./Data";
import { projectsNav } from "./Data";

// import components
import WorkItems from "./WorkItems";
import ImagePopup from "./ImagePopup";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div>
      {/* projects nav */}
      <div class="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      {/* projects */}
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} openPopup={openPopup} />;
        })}
      </div>
      {popupImage && <ImagePopup isOpen={true} onRequestClose={closePopup} image={popupImage} />}
    </div>
  );
};

export default Projects;
