import { styled } from "@mui/material/styles";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Seo from "../components/Seo/Seo";
import MainPage from "../modules/MainPage/MainPage";

const Home = ({ setActiveMode }: any) => {
  return (
    <>
      <Seo />
      <MainPage />
    </>
  );
};

export default Home;
