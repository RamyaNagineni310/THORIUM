import React from "react";

const BgText = () => {
  const tagLine = "Choose Your";
  return (
    <div className="w-screen mt-[90px] flex flex-col justify-center align-middle">
      <div className="tag-line">{tagLine}</div>
      <div className="w-full relative h-[650px] flex flex-col justify-center align-middle">
        <div className="access-text-bg" />
        <div className="person-one-img" />
        <div className="person-two-img" />
      </div>
    </div>
  );
};

export default BgText;
