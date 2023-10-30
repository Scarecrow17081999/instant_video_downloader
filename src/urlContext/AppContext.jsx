import React, { useRef } from "react";
import { createContext, useState } from "react";
export const MyContext = createContext();

const AppContext = (props) => {
  const [data, setData] = useState(null);
  const [pictureData, setPictureData] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [trending, setTrending] = useState([]);
  const [tab, setTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef();
  const handleTabChange = (newValue) => {
    setTab(newValue);
    setData(null);
    setPictureData(null);
    setStoryData(null);
    inputRef.current = "";
  };
  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        trending,
        setTrending,
        inputRef,
        tab,
        setTab,
        pictureData,
        setPictureData,
        storyData,
        setStoryData,
        handleTabChange,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default AppContext;
