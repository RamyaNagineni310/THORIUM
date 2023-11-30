import React from "react";

const MailSection = () => {
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book.`;
  return (
    <div className="mail-container">
      <div className="plus-icon" />
      <div className="mail-box">
        <input type="email" placeholder="Email Address" />
        <button>Learn More</button>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default MailSection;
