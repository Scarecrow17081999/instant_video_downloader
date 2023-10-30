import React from "react";
// import "./Ratings.scss";
import { Chip } from "@mui/material";
import Rating from "@mui/material/Rating";
const Ratings = () => {
  const label = (
    <Rating
      name="half-rating-read"
      defaultValue={4.5}
      precision={0.5}
      readOnly
    />
  );
  return (
    <div id="ratingsMainContainer">
      <div className="ratingsContainer">
        <h1>Give Us Your Quality Rating!</h1>
        <p>
          Don't forget to leave 5 stars if you like this free online video link
          downloader!
        </p>
        <a
          style={{ zIndex: "50" }}
          href="https://play.google.com/store/games?hl=en_US&gl=US&pli=1"
          target="_blank"
        >
          <Chip
            style={{
              backgroundColor: "#ffffffa1",

              paddingTop: "6px",
              cursor: "pointer",
            }}
            label={label}
          />
        </a>
      </div>
    </div>
  );
};

export default Ratings;
