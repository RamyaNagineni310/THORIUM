export default function Home() {
  return (
    <>
      <div className="description-container">
        <p className="description">
          <p>
            Expand your provider network <i>anywhere</i> in the country.
          </p>
          <p> Or lease just the ntwork locations you need.</p>
          <p>
            With MagnaCare Access,
            <b>The choice is yours.</b>
          </p>
        </p>
      </div>
      <div className="mail-container">
        <div className="plus-icon" />
        <div className="mail-box">
          <input type="email" placeholder="Email Address" />
          <button>Learn More</button>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="images-section">
        <div className="person-three-image" />
        <div className="dot-shape" />
      </div>
      <div className="map-section">
        <h2>
          Need to offer <i>nationwide</i>
          <div>access to health care</div>
          providers?
        </h2>
        <div className="flex flex-row gap-10">
          <div className="md:w-[50%] flex flex-col">
            <p className="details flex-1">
              MagnaCare has an extensive PPO network that includes all 50 states
              and Puerto Rico, with top-rated doctors and hospitals, as well as
              inpatient and outpatient services such as rehab centers, urgent
              care centers and ambulatory surgery centers.
            </p>
            <span>CONTACT US</span>
          </div>
          <div className="md:w-[50%]">
            <div className="map-image" />
          </div>
        </div>
      </div>
    </>
  );
}
