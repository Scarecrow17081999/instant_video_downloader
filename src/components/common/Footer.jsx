import React from "react";
import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import "../../scss/Footer.scss";

const Footer = () => {
  return (
    <footer
      style={{
        color: "rgb(182, 180, 180)",
        position: "relative",
      }}
      className="relative bg-blueGray-200 p-8 pb-6"
      id="contacts"
    >
      <div>
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-500 mb-6">
              Connect With Us!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  {" "}
                  <Twitter style={{ color: "#1DA1F2" }} />
                </a>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  {" "}
                  <Facebook style={{ color: "#4267B2" }} />
                </a>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  <LinkedIn style={{ color: "#0075B5" }} />
                </a>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  {" "}
                  <Instagram style={{ color: "#C13584" }} />
                </a>
              </button>
            </div>
          </div>
          {/* <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <u className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Apps
                </u>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Vimeo Vid
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      Utube Vid
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Beach Body
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Spotify Song
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <u className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Company
                </u>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      Our Experts
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <hr
          className="my-2 mt-6"
          style={{
            backgroundColor: "rgba(32, 32, 32, 0.699) !important",
            width: "100%",
          }}
        />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              © Copyright <span id="get-current-year">2023</span> CodeHunk.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
