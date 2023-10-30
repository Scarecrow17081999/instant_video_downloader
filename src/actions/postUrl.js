// postUrl//
import axios from "axios";
import * as api from "../api/api";

export const postVideoLink = async (url, setLoading, setError) => {
  try {
    setLoading(true);
    console.log(url, "this is url");
    const { data } = await api.instaVideos({ url });

    setLoading(false);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    setLoading(false);
    setError(error?.response?.data?.message);
  }
};
export const postPicLink = async (url, setLoading, setError) => {
  try {
    setLoading(true);
    const { data } = await api.instaPic({ url });
    setLoading(false);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    setLoading(false);
    setError(error?.response?.data?.message);
  }
};
export const postStoryLink = async (url, setLoading, setError) => {
  try {
    setLoading(true);
    const { data } = await api.instaStory({ url });
    setLoading(false);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    setLoading(false);
    setError(error?.response?.data?.message);
  }
};
