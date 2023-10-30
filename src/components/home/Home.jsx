import React from "react";
import { useContext, useEffect, useState } from "react";
import { Segmented } from "antd";
import Alert from "@mui/material/Alert";
import "./Home.scss";
import { MyContext } from "../../urlContext/AppContext";
import { Snackbar } from "@mui/material";
import {
  ContentPaste,
  Delete,
  OndemandVideo,
  CropOriginal,
  AutoStories,
} from "@mui/icons-material";
import Spinner from "../common/Spinner.jsx";
import {
  postPicLink,
  postStoryLink,
  postVideoLink,
} from "../../actions/postUrl";
import VideoPreview from "../preview/VideoPreview";
import PicturePreview from "../preview/PicturePreview";
import StoryPreview from "../preview/StoryPreview";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
const staticData = {
  downloadLink: [
    {
      thumbnail:
        "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS8zNjQyNjM3MTVfMjYzODgyODc1OTYwMjEyMV8zNjQyMDYwNjI1NDMxNzcwOTUwX24uanBnP3N0cD1kc3QtanBnX2UxNSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMSZfbmNfb2hjPTExcmFLbVVXRmxRQVg4QlZKSUwmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0FmQTZCLTF3eW1Za0pVSy10aHkzOVlIRUg2clY1bVBNTm5lbHpuSEstRFpuYmcmb2U9NjRFMkUyOTUmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBzYXZlLmFwcF8zNjQyNjM3MTVfMjYzODgyODc1OTYwMjEyMV8zNjQyMDYwNjI1NDMxNzcwOTUwX24uanBnIn0.Sa56V_lQxXKzbx6hJQNm2CagU8Dv1YFqks0Qkm-XLIE",
      url: "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NjYuMzAxMDAtMTYvNDU0MDY4NDhfNjM0ODc0MzkzNTE3NDAwNF83OTUwNDE0NjI1MDc1NDIwNDJfbi5tcDQ_X25jX2h0PXNjb250ZW50LmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29oYz1UZG1mRDlpUTdwVUFYXzJOVFdDJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZkI2YXdqNmlZbEl2TWNoRDFIbVR0SUNDRmpBWF9TM2NKRzhOaEh0Vl8zR1RRJm9lPTY0RTI3MEMxJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwc2F2ZS5hcHBfNDU0MDY4NDhfNjM0ODc0MzkzNTE3NDAwNF83OTUwNDE0NjI1MDc1NDIwNDJfbi5tcDQifQ.3bIEqJQcpFaFBns8U6FoW1YRMZm9bSDv_7ZIE0oDISo&dl=1",
    },
  ],
};
const staticPictureData = {
  downloadLink: [
    {
      thumbnail:
        "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS8zNTk3Mzk2NjRfMTcxMDg1Mjc1MjY5MTExOV82Nzg1NDg2MTA1NTIxNzQxNTVfbi5qcGc_c3RwPWRzdC1qcGdfZTE1Jl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTExJl9uY19vaGM9ejkxTUdTaWJFNUlBWC1NbG9qLSZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZBU2U3Q1dzQmxzbXg4Q25sN1NZYlV1OEhmd3RrbDdJSGZsa2RUaXBsdy1HdyZvZT02NEQxODI3MiZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcHNhdmUuYXBwXzM1OTczOTY2NF8xNzEwODUyNzUyNjkxMTE5XzY3ODU0ODYxMDU1MjE3NDE1NV9uLmpwZyJ9.CpDpY6QYvO3q35Zll_bKR9796SmTvybL62iMhHwIXeU",
      url: "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTAuMjg4Ni0xNi8zNTgxODI5MDhfMTAwNjk4MjkzNzQwNTExMV83NjQ1OTUwNDE4ODgwMTczNDM3X24ubXA0P19uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAzJl9uY19vaGM9bGtZSU9fanhGUnNBWDllVl93aCZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZCWE1QRjRYZmstRTFGYjZ0Sm5XZXNzWGVFTG5uQ3NJV0NwdTc4WFJybTRHQSZvZT02NEQxQzM3NCZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcHNhdmUuYXBwXzM1ODE4MjkwOF8xMDA2OTgyOTM3NDA1MTExXzc2NDU5NTA0MTg4ODAxNzM0Mzdfbi5tcDQifQ.I_d_TpxypQZmVeNx4Xk2_9Us_14Ho_Jq4kFOwOhqtKA&dl=1",
    },
  ],
};
const staticStoryData = {
  downloadLink: [
    {
      thumbnail:
        "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS8zNTk3Mzk2NjRfMTcxMDg1Mjc1MjY5MTExOV82Nzg1NDg2MTA1NTIxNzQxNTVfbi5qcGc_c3RwPWRzdC1qcGdfZTE1Jl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTExJl9uY19vaGM9ejkxTUdTaWJFNUlBWC1NbG9qLSZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZBU2U3Q1dzQmxzbXg4Q25sN1NZYlV1OEhmd3RrbDdJSGZsa2RUaXBsdy1HdyZvZT02NEQxODI3MiZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcHNhdmUuYXBwXzM1OTczOTY2NF8xNzEwODUyNzUyNjkxMTE5XzY3ODU0ODYxMDU1MjE3NDE1NV9uLmpwZyJ9.CpDpY6QYvO3q35Zll_bKR9796SmTvybL62iMhHwIXeU",
      url: "https://snapxcdn.com/v2/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTAuMjg4Ni0xNi8zNTgxODI5MDhfMTAwNjk4MjkzNzQwNTExMV83NjQ1OTUwNDE4ODgwMTczNDM3X24ubXA0P19uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAzJl9uY19vaGM9bGtZSU9fanhGUnNBWDllVl93aCZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQWZCWE1QRjRYZmstRTFGYjZ0Sm5XZXNzWGVFTG5uQ3NJV0NwdTc4WFJybTRHQSZvZT02NEQxQzM3NCZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcHNhdmUuYXBwXzM1ODE4MjkwOF8xMDA2OTgyOTM3NDA1MTExXzc2NDU5NTA0MTg4ODAxNzM0Mzdfbi5tcDQifQ.I_d_TpxypQZmVeNx4Xk2_9Us_14Ho_Jq4kFOwOhqtKA&dl=1",
    },
  ],
};
const Home = () => {
  const {
    data,
    pictureData,
    storyData,
    loading,
    setLoading,
    error,
    setError,
    setData,
    inputRef,
    tab,
    setPictureData,
    setStoryData,
    handleTabChange,
  } = useContext(MyContext);
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    if (error !== null) {
      setOpen(true);
    }
  }, [loading, tab]);
  const handlePasteClick = () => {
    if (inputRef.current && navigator.clipboard) {
      navigator.clipboard.readText().then((pastedText) => {
        inputRef.current.value = pastedText;
        setUrl(pastedText);
      });
    }
  };
  const handleCutClick = () => {
    setUrl("");
    inputRef.current.value = "";
  };

  const handleSubmit = async () => {
    // setLoading(true);
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Accept", "application/json");

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: JSON.stringify({ url }),
    //   // redirect: "follow",
    // };
    // try {
    //   const response = await fetch(
    //     "https://us-central1-instantreeldownload.cloudfunctions.net/download",
    //     requestOptions
    //   );
    //   const result = await response.json();
    //   setLoading(false);
    //   if (!result) return;
    //   window.scrollTo(0, 1000);

    //   if (result?.downloadLink?.length > 0) {
    //     setData(result);
    //     // setData(staticData);
    //   } else {
    //     setLoading(false);
    //     setError("Warning!", result?.error ?? "Invalid URL");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   setError(error);
    // }

    if (tab == 1) {
      const urlStringified = JSON.stringify({ url });
      let res = await postVideoLink(urlStringified, setLoading, setError);
      // if (!res) return;
      window.scrollTo(0, 400);
      setData(staticData);
    }
    if (tab == 2) {
      const urlStringified = JSON.stringify({ url });
      let res = await postPicLink(urlStringified, setLoading, setError);
      // if (!res) return;
      window.scrollTo(0, 400);
      setPictureData(staticPictureData);
    }
    if (tab == 3) {
      const urlStringified = JSON.stringify({ url });
      let res = await postStoryLink(urlStringified, setLoading, setError);
      // if (!res) return;
      window.scrollTo(0, 400);
      setStoryData(staticStoryData);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleChange = (e) => {
    if (e == "Video") {
      handleTabChange(1);
    }
    if (e == "Image") {
      handleTabChange(2);
    }
    if (e == "Story") {
      handleTabChange(3);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          style={{ border: "3px solid #ddd" }}
          onClose={handleClose}
          sx={{ width: "100%" }}
          severity="error"
        >
          {error?.response?.data?.message
            ? error?.response?.data?.message
            : "Something went wrong Please try again"}
        </Alert>
      </Snackbar>

      <svg
        style={{ position: "absolute", top: "-550px", left: "-500px" }}
        id="10015.io"
        viewBox="0 0 480 480"
      >
        <path
          fill="rgba(225,225,225, 0.04)"
          d="M384,316.5Q328,393,232.5,406Q137,419,76,329.5Q15,240,89.5,174Q164,108,255,82.5Q346,57,393,148.5Q440,240,384,316.5Z"
        />
      </svg>
      <div className="main">
        <div className="home flex items-center justify-center">
          <h1 className="heading">
            {tab == 1
              ? "Video Downloader"
              : tab == 2
              ? "Picture Downloader"
              : "Story Downloader"}
          </h1>

          <Segmented
            size={"large"}
            onChange={(e) => handleChange(e)}
            options={[
              {
                label: windowSize > 380 && "Video",
                value: "Video",
                icon: <OndemandVideo />,
              },
              {
                label: windowSize > 380 && "image",
                value: "Image",
                icon: <CropOriginal />,
              },
              {
                label: windowSize > 380 && "Story",
                value: "Story",
                icon: <AutoStories />,
              },
            ]}
          />
          <p>
            Download videos, picture, story online from your browser. Edit,
            save, and share anywhere!
          </p>
          <div style={{ width: "80%" }} className="rounded-lg">
            <div className="flex" id="InputContainer">
              <div>
                <InsertLinkIcon />
                <input
                  ref={inputRef}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  className="w-full bg-white pl-2 text-base font-semibold outline-0"
                  placeholder="Paste Your Link Here..."
                />
                {url ? (
                  <button id="heroButton" onClick={handleCutClick}>
                    {" "}
                    <Delete />
                  </button>
                ) : (
                  <button id="heroButton" onClick={handlePasteClick}>
                    {" "}
                    <ContentPaste />
                  </button>
                )}
                {windowSize > 768 && (
                  <button
                    disabled={loading}
                    id="downloadButton"
                    onClick={handleSubmit}
                    className=" p-2 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg text-white font-semibold  transition-colors "
                  >
                    {" "}
                    {loading ? <Spinner /> : "Download"}
                  </button>
                )}
              </div>
              {windowSize < 768 && (
                <button
                  disabled={loading}
                  id="downloadButton"
                  onClick={handleSubmit}
                  className=" p-2 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg text-white font-semibold  transition-colors "
                >
                  {" "}
                  {loading ? <Spinner /> : "Download"}
                </button>
              )}
            </div>
          </div>
        </div>

        {data && <VideoPreview />}
        {pictureData && <PicturePreview />}
        {storyData && <StoryPreview />}
      </div>
      <svg
        style={{ position: "absolute", top: "750px", right: "-500px" }}
        id="10015.io"
        viewBox="0 0 480 480"
      >
        <path
          fill="rgba(255, 255, 255, 0.02)"
          d="M387.5,336Q351,432,258,401Q165,370,111,305Q57,240,91,140.5Q125,41,223,70.5Q321,100,372.5,170Q424,240,387.5,336Z"
        />
      </svg>
    </div>
  );
};

export default Home;
