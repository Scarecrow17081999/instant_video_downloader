import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./Description2.scss";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Download } from "@mui/icons-material";
import { Tooltip } from "antd";
import { motion, useInView } from "framer-motion";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  transition: "all 0.15s ease-in-out",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    scale: "1.02",
  },
}));
const data = [
  {
    title: "1. Copy the video URL",
    description: "Copy the URL of the video you want to download.",
    svg: <ContentPasteSearchIcon />,
    content: (
      <div className="howtoDownloadContainer">
        <div style={{ width: "100%" }}>
          <AdsClickIcon />
          <h1 className="heading2">Insta Video Downloader</h1>
          <Tooltip placement="topLeft" title="Copy" trigger="click" defaultOpen>
            <input
              placeholder="https://instagram.com/shorts "
              style={{
                color: "#fff",
                height: "35px",
                padding: "0 .65rem",
                width: "calc(100% - 0px)",
                borderRadius: "3px",
              }}
              disabled
              type="text"
            />
          </Tooltip>
        </div>
        <div id="copyLinkContainer">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Paste it in the feild",
    description:
      "Paste a video URL from Instagram on the field provided and hit Download.",
    svg: <DownloadIcon />,
    content: (
      <div className="howtoDownloadContainer">
        <h1 className="heading2">Insta Video Downloader</h1>
        <AdsClickIcon />
        <div style={{ width: "100%" }}>
          <Tooltip
            placement="topLeft"
            title="Paste"
            trigger="click"
            defaultOpen
          >
            <input
              placeholder="https://instagram.com/shorts "
              style={{
                color: "#fff",
                height: "36px",
                padding: "0 .65rem",
                width: "calc(100% - 45px)",
                borderRadius: "3px 0px 0px 3px",
              }}
              disabled
              type="text"
            />
          </Tooltip>
          <button
            style={{
              // backgroundColor: "#1b1b1bA3",
              backgroundColor: "#171941",
              color: "#ffffffa1",
              height: "35px",
              borderRadius: "0 3px 3px 0px",
              width: "45px",
            }}
          >
            <Download />
          </button>{" "}
        </div>
        <div id="copyLinkContainer">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ),
  },
  {
    title: "3. Download",
    description: "Click “Download” to save your video to your device.",
    svg: <ShareIcon />,
    content: (
      <div className="howtoDownloadContainer">
        <div
          style={{ borderRadius: "3px", backgroundColor: "#00000024" }}
          className="w-full h-full bg-black-50"
        >
          <img
            style={{ display: "block", margin: "auto", padding: "0.5rem 0" }}
            src="playCircle.svg"
            width={"100px"}
            alt=""
          />
          <button
            style={{
              backgroundColor: "#171941",
              // backgroundColor: "#1b1b1bA3",
              color: "#ffffffa1",
              width: "100%",
              padding: ".6rem 0",
              borderRadius: "0 0 3px 3px",
            }}
          >
            <Download />
            Download
          </button>
        </div>
      </div>
    ),
  },
];

const Description2 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <Box id="description2MainContainer" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 12 }}
      >
        {data.map((e, index) => (
          <Grid xs={2} sm={2} md={4} key={index}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Item className="itemContainer">{e.content}</Item>
              <div className="text-center mt-4">
                <h1>{e.title}</h1>
                <p>{e.description}</p>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Description2;
