import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt?: string;
}

const NextImage = ({ src, alt }: Props) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} layout="fill" className="image" />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",

  "& > div": {
    position: "unset !important",
  },

  "& .image": {
    objectFit: "contain",
    width: "100% !important",
    position: "relative !important",
    height: "unset !important",
  },
});

export default NextImage;
