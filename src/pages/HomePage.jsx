import React from "react";
import { useContext, useEffect } from "react";
import HomeComponent from "../components/home/Home";
import "../scss/Home.scss";
import Description2 from "../components/description/Description2";
import { MyContext } from "../urlContext/AppContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DownloadApp from "../components/download/DownloadApp";
import OtherFeatures from "../components/otherFeatures/OtherFeatures";
import Accordian from "../components/accordian/Accordian";
import { FloatButton } from "antd";
import ScrollXAnimation from "../components/scroll/ScrollXAnimation";

const style = {
  margin: "6rem 0 0 0",
};
const Home = () => {
  const { data, tab, pictureData, storyData } = useContext(MyContext);

  useEffect(() => {}, [data, tab]);
  return (
    <div style={{ position: "relative" }} id="homepageLayoutMainContainer">
      <ScrollXAnimation />
      <div>
        <HomeComponent />
      </div>
      <div style={style}>
        <Description2 />
      </div>
      {/* <div style={style}>
        <OpacityAnimate>
          <Features />
        </OpacityAnimate>
      </div> */}
      <div style={style}>
        <Accordian />
      </div>
      <div style={style}>
        <OtherFeatures />
      </div>
      <div>
        <DownloadApp />
      </div>
      <FloatButton.BackTop
        style={{ background: "#fff" }}
        icon={<KeyboardArrowUpIcon style={{ fontSize: "1.2rem" }} />}
        onClick={() => window.scrollTo(0, 0)}
      />
      {/* <SelectLanguage /> */}
    </div>
  );
};

export default Home;
