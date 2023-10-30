import React, { useState } from "react";

const VideoDownloader = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorDialog, setErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState(
    "https://www.instagram.com/reel/CvX7dDisOtQ/?igshid=MzRlODBiNWFlZA=="
  );

  const _showDialog = (title, message) => {
    setErrorDialog(true);
    setErrorMessage(message);
  };

  const handleDownload = async () => {
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Accept", "application/json");
    const raw = JSON.stringify({ url: videoUrl });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://us-central1-instantreeldownload.cloudfunctions.net/download",
        requestOptions
      );
      // console.log("response:", response);

      const result = await response.json();
      // console.log("result:", result);
      setLoading(false);

      if (result?.downloadLink?.length > 0) {
        setData(result.downloadLink[0]);
        // saveAs(result.downloadLink[0], "video.mp4");
      } else {
        _showDialog("Warning!", result?.error ?? "Invalid URL");
      }
    } catch (error) {
      // console.log("error", error);
      setLoading(false);
      _showDialog("Warning!", "Invalid URL");
    }
  };

  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={handleUrlChange}
        placeholder="Enter video URL"
      />
      <button onClick={handleDownload} disabled={loading}>
        {loading ? "Loading..." : "Download Video"}
      </button>
      {errorDialog && (
        <div>
          <h2>{"Warning!"}</h2>
          <p>{errorMessage}</p>
        </div>
      )}
      {data && (
        <div>
          <h2>{"Download Link:"}</h2>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default VideoDownloader;
