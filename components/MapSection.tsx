import React from "react";

const MapSection = () => {
  return (
    <div className="map-section">
      <h2>
        Need to offer <i>nationwide</i>
        <div>access to health care</div>
        providers?
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[50%] flex flex-col">
          <p className="details flex-1">
            MagnaCare has an extensive PPO network that includes all 50 states
            and Puerto Rico, with top-rated doctors and hospitals, as well as
            inpatient and outpatient services such as rehab centers, urgent care
            centers and ambulatory surgery centers.
          </p>
          <span>CONTACT US</span>
        </div>
        <div className="md:w-[50%]">
          <div className="map-image" aria-label="map-image" />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
