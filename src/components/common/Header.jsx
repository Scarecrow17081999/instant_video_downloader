import React, { useState } from "react";
import Drawer from "./drawer/Drawer";
import styled from "@emotion/styled";
const StyledH5 = styled.h5`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  return (
    <>
      <div>
        <div className="flex">
          <nav
            style={{
              alignItems: "center",
              zIndex: "9999",
              padding: "0.25rem 5%",
            }}
            className="flex justify-between  bg-white/80
          backdrop-blur-md
          fixed top-0 left-0 right-0"
          >
            <div className="flex">
              <a
                style={{
                  marginRight: "auto",
                  justifyContent: "flex-start !important",
                  display: "flex",
                  alignItems: "center",
                }}
                className="cursor-pointer justify-start"
                href="/"
              >
                <img
                  style={{ marginRight: "1rem" }}
                  className="h-10 object-cover"
                  src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                  alt="Store Logo"
                />

                <StyledH5 style={{ fontSize: "1.3rem" }}>
                  {" "}
                  Insat Video Downloader
                </StyledH5>
              </a>
            </div>
            <Drawer />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
