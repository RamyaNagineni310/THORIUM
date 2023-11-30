import React from "react";

const MainBanner = () => {
  const tagLine = "Choose Your";
  return (
    <div className="main-banner-container w-screen mt-[90px] flex flex-col justify-center align-middle">
      <div className="tag-line">{tagLine}</div>
      <div className="main-banner-images w-full relative h-[45vw]">
        <div className="access-text-bg" />
        <div className="person-one-img" />
        <div className="person-two-img" />
      </div>
    </div>
  );
};

export default MainBanner;
