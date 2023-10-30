import styled from "@emotion/styled";
import React from "react";
import OpacityAnimate from "../../utils/OpacityAnimate";
const DownloadApp = () => {
  return (
    <OpacityAnimate>
      <Container>
        <LeftCOntainer>
          <AppHeading>Download with app Instant video downloader</AppHeading>
          <p>
            We now provide an app for Instagram video Download. It is fast,
            easy, with no watermark and HD quality
          </p>
        </LeftCOntainer>
        <RightContainer>
          <a
            href="https://play.google.com/store/apps/details?id=com.instantvideodownloder"
            target="_blank"
          >
            <IconImage src="appleIcon.svg" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.instantvideodownloder"
            target="_blank"
          >
            <IconImage src="playstoreIcon.svg" />
          </a>
        </RightContainer>
      </Container>
    </OpacityAnimate>
  );
};

export default DownloadApp;

const Container = styled.div`
box-sizing: content-box;
>*{
  box-sizing: content-box;
}
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  margin-bottom:5rem;


   @media screen and (max-width: 768px) {
    flex-direction: column;
   >div{
    width:100%;
    text-align:center;
    &:last-child{
      margin-top:1rem;
    }
   }
  } 
}
`;

const LeftCOntainer = styled.div`
  width: calc(100% - 300px);
`;
const RightContainer = styled.div`
  // border: 1px solid red;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    // border: 1px solid red;
    margin-left: 1rem;
    width: fit-content;
    width: 150px;
  }
`;
const IconImage = styled.img`
  width: 80px;
  transition: all 0.1s ease-in-out;
  dispay: block;
  margin: auto;
  &:hover {
    width: 85px;
  }
  // border: 1px solid red;
`;

const AppHeading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
`;
