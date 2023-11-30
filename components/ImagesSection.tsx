import React from "react";

const ImagesSection = () => {
  return (
    <div className="images-section flex flex-col-reverse md:flex-row">
      <div
        className="person-three-image w-full md:w-[70vw]"
        aria-label="person-three-image"
      />
      <div className="dot-shape md:flex" aria-label="shape-image" />
    </div>
  );
};

export default ImagesSection;
