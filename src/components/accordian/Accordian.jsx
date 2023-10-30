import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import "./AccordianPage.scss";
import { motion } from "framer-motion";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "14px",
  marginBottom: "0.6rem",
  marginTop: "0.6rem",
  backgroundColor: "#ffffffa1",
  // ":hover": {},
  ">div>div>p": {
    fontWeight: "500 !important",
  },
  transition: "all 0.23s ease-in-out",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  fontFamily: "inherit !important",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  color: "black",
}));

export default function Accordian() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="accordianMianContainer">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <HelpOutlineIcon />
          <h1>Frequently Asked Questions</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="accordianContainer"
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={{ zIndex: "500" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <p>What is IG video downloader?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Instagram video downloader is an easy to use tool specially
                designed for saving Instagram video online. IGDownloader.com
                helps you download videos in high quality MP4 format so you can
                store them on your PC, Mac, Android, or iPhone devices.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <p>How to download Instagram video?</p>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Using our video downloader is a quick and easy way to save
                videos off Instagram. And the process couldn't be simpler.
                <ul style={{ listStyle: "initial", paddingLeft: "1rem" }}>
                  <li>
                    Open Instagram using the Instagram web app and find the post
                    with the video that you want to save for later.
                  </li>
                  <li>
                    Select and copy the link to the post from the browsers
                    address bar.
                  </li>
                  <li>
                    Head over to our Instagram video download tool and paste
                    link into the form and hit go.
                  </li>
                  <li>
                    The page will reload and display the video along with
                    download options.
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <p>What devices are compatible?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The IG Downloader app is compatible with all brands of
                smartphones, tablets, and PCs. As you may have noticed,
                IGDownloader is a web app, so you can download Instagram videos
                by accessing our site on any device with a browser.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <p>Are there are download restrictions?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                With IGDownloader.com's Instagram video downloader, you can
                download as many videos as you want with no limitations or
                restrictions.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <p>Can I download private videos?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Our Instagram video download tool can only download publicly
                accessible Instagram video. Should you wish to download videos
                that aren't public, we recommend using our private Instagram
                downloader that supports the download of private Instagram
                videos and other content.
              </p>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      </div>
      {/* <svg
        style={{ position: "absolute", top: -200, left: -500, zIndex: -10 }}
        id="10015.io"
        viewBox="0 0 480 480"
      >
        <path
          fill="rgba(225,225,225,0.02)"
          d="M385,338Q353,436,244,429Q135,422,74.5,331Q14,240,70,141Q126,42,219.5,77.5Q313,113,365,176.5Q417,240,385,338Z"
        />
      </svg> */}
    </div>
  );
}
