import React from "react";

const WorkItems = ({ item, openPopup }) => {
  return (
    <div className="work__card" key={item.id}>
      <img
        src={item.image || item.image2}
        alt={item.title}
        className="work__img"
        onClick={() => openPopup(item.image || item.image2)}
        style={{ cursor: 'pointer' }}

      />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description"
      >
        {item.description}
      </p>
      {item.link && (
        <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
      {item.image2 && (
        <div className="work__button" onClick={() => openPopup(item.image2)}>
          Preview <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
