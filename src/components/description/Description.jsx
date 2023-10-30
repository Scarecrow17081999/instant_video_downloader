import React from "react";
import "./Description.scss";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";

const data = [
  {
    title: "1. Paste a reel URL ",
    description:
      "Paste a video URL from Instagram on the field provided and hit Download.And wait for the response if Error occurs check your Instagram reel link and try again.",
    svg: <ContentPasteSearchIcon />,
    image: "svgImage1.svg",
  },
  {
    title: "2. Download",
    description:
      "You have the option to change your video, picture ,story using try again.Or click “Download” to save your video to your device.",
    svg: <DownloadIcon />,
    image: "svgImage2.svg",
  },
  {
    title: "3. Share",
    description: "Save your video and share it on other platforms.",
    svg: <ShareIcon />,
    image: "svgImage3.svg",
  },
];
const Description = () => {
  return (
    <div id="descriptionMainContainer">
      <h1>How to download :</h1>
      <>
        {data.map((e, index) => (
          <div id="descriptionContainerCard">
            <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white">
              <div>
                <h6 icon={e.svg} label={e.title}>
                  {e.title}
                </h6>
                <p>{e.description}</p>
              </div>

              <img
                style={{ order: index == 1 ? 1 : -1 }}
                className="h-20 w-20"
                src={e.image}
                alt={e.title}
              />
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Description;
