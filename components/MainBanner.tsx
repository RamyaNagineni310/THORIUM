import React from "react";

const MainBanner = () => {
  const tagLine = "Choose Your";
  return (
    <div className="main-banner-container w-screen mt-[90px] flex flex-col justify-center align-middle">
      <div className="tag-line">{tagLine}</div>
      <div className="main-banner-images w-full relative">
        <div className="access-text-bg" aria-label="access-image" />
        <div className="person-one-img" aria-label="person-one-image" />
        <div className="person-two-img" aria-label="person-two-image" />
      </div>
    </div>
  );
};

export default MainBanner;
