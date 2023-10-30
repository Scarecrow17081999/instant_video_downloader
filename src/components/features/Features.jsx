import styled from "@emotion/styled";
import React from "react";

const Features = () => {
  return (
    <MainContainer className="featuresMainContainer">
      <FeaturesContainer>
        <h1>Features Of instant video Downloader</h1>
        <UlContainer>
          <p>
            Download videos from different online platforms from your phone,
            desktop, or tablet in just one click! VEED lets you download content
            from Instagram, TikTok, Vimeo, Twitch, and more so you can edit,
            repurpose, and share them anywhere. No watermarks, no loss in video
            quality, and fast! VEED’s video downloader works straight from your
            mobile or desktop browser; no app to install. You can even edit your
            videos using our free built-in video editor. Add images, audio,
            text, subtitles, and more.
          </p>
          <p>
            Optimize videos for Facebook, Instagram, Twitter, YouTube, and other
            social media and video-sharing platforms. Just select a preset from
            the Settings, and you’re good to go.
            <br />
            <br />
            Note that most video-sharing platforms only allow downloading videos
            that are set to public. Please make sure that you have permission
            from the content creator to use their videos before altering or
            sharing them.
          </p>
        </UlContainer>
      </FeaturesContainer>
    </MainContainer>
  );
};

export default Features;
const MainContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  border: 1px solid #e4e4e477;
  margin: 2rem auto;
  color: white;
  padding: 3rem;
  background: #ffffffa1;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

const FeaturesContainer = styled.div`
  > h1 {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
  }
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const UlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  min-height: 50%;

  > p {
    min-width: 50%;
    padding: 1.5rem 1.5rem 1rem 0;
    // color: #2f2f2fe0;
    color: #000000;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
