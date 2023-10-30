import React, { useContext, useEffect } from "react";
import { MyContext } from "../../../urlContext/AppContext";
import "./TabSwitch.scss";
import { Info, Contacts, Settings } from "@mui/icons-material";
export default function TabSwitch({ setState, state, anchor }) {
  const { setTab, setData, setPictureData, setStoryData, tab } =
    useContext(MyContext);
  useEffect(() => {}, [tab]);
  const handleTabChange = (newValue) => {
    setTab(newValue);
    setData(null);
    setPictureData(null);
    setStoryData(null);
  };

  return (
    <div>
      <div>
        <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 right-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          <a
            href="/"
            className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400  text-black-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>

            <small className="text-xs font-medium">Home</small>
          </a>

          <hr className="dark:border-gray-700/60" />
          <a
            onClick={() => {
              setState({ ...state, [anchor]: false }), handleTabChange(2);
            }}
            href="#contacts"
            className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-100 text-blue-700"
          >
            <Contacts />
            <small className="text-center text-xs font-medium">
              {" "}
              Contact Us{" "}
            </small>
          </a>
          {/* <hr className="dark:border-gray-700/60" />
          <a
            onClick={() => {
              setState({ ...state, [anchor]: false }), handleTabChange(3);
            }}
            href="#settings"
            className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400  text-black-50"
          >
            <Settings />
            <small className="text-center text-xs font-medium">
              {" "}
              Settings{" "}
            </small>
          </a> */}

          <hr className="dark:border-gray-700/60" />
          <a
            onClick={() => {
              setState({ ...state, [anchor]: false }), handleTabChange(1);
            }}
            href="#about"
            className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-100 text-indigo-600 "
          >
            <Info />
            <small className="text-center text-xs font-medium">
              {" "}
              About Us{" "}
            </small>
          </a>
        </nav>
      </div>
    </div>
  );
}
