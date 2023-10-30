import React from "react";
import { useContext, useEffect } from "react";
import { MyContext } from "../../urlContext/AppContext";
import "./VideoPreview.scss";
import Loader from "../common/Loader";
import { Replay, Download } from "@mui/icons-material";

import { Card, CardActionArea, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

const MyButton = styled.button`
  // padding: 1rem;
`;
const VideoPreview = () => {
  const { loading, data, setData, inputRef } = useContext(MyContext);
  const { url } = data?.downloadLink[0];
  const handleTryAnother = () => {
    inputRef.current.focus();
    setData(null);
    window.scrollTo(0, 0);
  };
  console.log(url);
  useEffect(() => {}, [loading]);
  return loading ? (
    <Loader />
  ) : (
    <div id="videoPreviewMainContainer">
      <div className="cardPreview">
        <Card>
          <CardActionArea>
            <CardMedia
              style={{ width: "100%" }}
              component="video"
              src={url}
              controls={true}
            />
          </CardActionArea>
        </Card>
      </div>
      <div className="cardLinks">
        <h2>Your video is ready!</h2>
        <a href={data ? url : null}>
          <MyButton className="downloadButton">
            <Download sx={{ marginRight: ".5rem" }} /> Download
          </MyButton>
        </a>
        <MyButton onClick={() => handleTryAnother()} className="tryAnother">
          <Replay sx={{ marginRight: ".5rem" }} /> Clear
        </MyButton>
      </div>
    </div>
  );
};
export default VideoPreview;
