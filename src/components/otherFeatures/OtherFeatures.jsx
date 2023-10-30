import React from "react";
import "./OtherFeatures.scss";
import { Divider } from "@mui/material";
const OtherFeatures = () => {
  return (
    <div id="ratingsMainContainer" style={{ position: "relative" }}>
      <Divider className="heading">Download Video</Divider>

      <div className="ratingsContainer">
        <img width="70" height="70" src="video.png" alt="image" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nemo
          beatae expedita totam impedit accusantium nesciunt sequi est molestias
          soluta.
        </p>
      </div>
      <Divider className="heading">Download Image</Divider>
      <div className="ratingsContainer">
        <img width="100" height="100" src="image.png" alt="image" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nemo
          beatae expedita totam impedit accusantium nesciunt sequi est molestias
          soluta.
        </p>
      </div>
      <Divider className="heading">Download Story</Divider>
      <div className="ratingsContainer">
        <img width="100" height="100" src="story.png" alt="story" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia cum
          veniam qui? Adipisci voluptatibus dolorem corrupti quibusdam velit
          quidem temporibus odit quasi reprehenderit? Quisquam?
        </p>
        <Divider />
      </div>
    </div>
  );
};

export default OtherFeatures;
